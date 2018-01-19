import * as actions from './actions';
//import { newSynth } from './tone';
import { mainSynth } from './tone';

window.synth = mainSynth;//for debugging purposes

export const GAME_STATE_GUESS = "GAME_STATE_GUESS";
export const GAME_STATE_PIANO = "GAME_STATE_PIANO";//No game but a piano
/*const QUESTION_KEY_ARRAY = ["A2",
  "B2", "As2", "C3", "D3", "Cs3",
  "E3", "Ds3", "F3", "G3", "Fs3",
  "A3", "Gs3", "B3", "As3"];*/
//black keys and white keys
const QUESTION_KEY_ARRAY = ["A2",
  "B2", "C3", "D3",
  "E3", "F3", "G3",
  "A3", "B3"];
//or just white keys
const QUESTION_NOTE_RELEASE_TIME = 1500;
//TODO: optimize code structure

//without the action to start the game it's just a piano
export function game(state = {gameState: GAME_STATE_PIANO, playing: false, playedKey: {}}, action) {
  switch(action.type){
    case actions.ACTION_NEXT_ROUND:
      var answerKey = QUESTION_KEY_ARRAY[Math.floor(Math.random() * QUESTION_KEY_ARRAY.length)];
      mainSynth.triggerAttack(classNameToKeyName(answerKey));//consider moving this code into a component
      setTimeout(()=>mainSynth.triggerRelease(classNameToKeyName(answerKey)), QUESTION_NOTE_RELEASE_TIME);//and this
      var newState = Object.assign({}, state, {gameState: GAME_STATE_GUESS, answerKey});
      delete newState.greenKey;
      delete newState.redKey;
      return newState;
    case actions.ACTION_KEY_DOWN:
      console.log("Played", action.key);
      //let playedKey = Object.assign({}, state.playedKey, {[action.key]: newSynth()});//treat as a blackbox
      let playedKey = Object.assign({}, state.playedKey, {[action.key]: true});
      mainSynth.triggerAttack(classNameToKeyName(action.key));
      return Object.assign({},state, {
         playing:true,
         playedKey
       });
    case actions.ACTION_KEY_UP:
      console.log("Stop Playing", action.key);
      //newState.playedKey[action.key].triggerRelease();
      for(var i = 0;i<10;i++)//a not good fix to the problem below
        mainSynth.triggerRelease(classNameToKeyName(action.key));
      //FIXME: when there is a keydown without no key up, keyup afterwards dowsn't work (need one more release)
      var newState = Object.assign({}, state);
      newState.playedKey = Object.assign({}, newState.playedKey);
      delete newState.playedKey[action.key];
      var playing = (JSON.stringify(newState.playedKey) != "{}");
      Object.assign(newState, {playing: playing});
      if(newState.gameState == GAME_STATE_GUESS){
        if(action.key == newState.answerKey){
          newState.greenKey = action.key;
          console.log("Correct");
        }else{
          newState.redKey = action.key;
          //state.greenKey = state.answerKey;
          //not showing the answer directly, allowing multiple guesses
          console.log("No?");
        }
      }
      return newState;
    default:
      return state;
  }
}

function classNameToKeyName(className) {
  return className.replace("s","#");
}

export function tone(state, action){
  if(state == undefined){
    state = {};
  }
  return state;
}
