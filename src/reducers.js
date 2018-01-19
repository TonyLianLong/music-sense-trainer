import * as actions from './actions';
//import { newSynth } from './tone';
import { mainSynth } from './tone';
window.synth = mainSynth;//for debugging purposes
export function game(state = {playing: false, playedKey: {}}, action) {
  switch(action.type){
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
      mainSynth.triggerRelease(classNameToKeyName(action.key));
      //FIXME: when there is a keydown without no key up, keyup afterwards dowsn't work (need one more release)
      var newState = Object.assign({},state);
      newState.playedKey = Object.assign({},newState.playedKey);
      delete newState.playedKey[action.key];
      var playing = (JSON.stringify(newState.playedKey) != "{}");
      Object.assign(newState, {playing: playing});
      return newState;
    default:
      return state;
  }
}

function classNameToKeyName(className) {
  console.log(className.replace("s","#"));
  return className.replace("s","#");
}

export function tone(state, action){
  if(state == undefined){
    state = {};
  }
  return state;
}
