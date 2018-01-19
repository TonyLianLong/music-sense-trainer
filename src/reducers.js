import * as actions from './actions';
//import { newSynth } from './tone';
import { mainSynth } from './tone';

export function game(state = {playing: false, playedKey: {}}, action) {
  switch(action.type){
    case actions.ACTION_KEY_DOWN:
      console.log("Played", action.key);
      //let playedKey = Object.assign({}, state.playedKey, {[action.key]: newSynth()});//treat as a blackbox
      let playedKey = Object.assign({}, state.playedKey, {[action.key]: true});
      mainSynth.triggerAttack(action.key);
      return Object.assign({},state, {
         playing:true,
         playedKey
       });
    case actions.ACTION_KEY_UP:
      console.log("Stop Playing", action.key);
      //newState.playedKey[action.key].triggerRelease();
      mainSynth.triggerRelease(action.key);
      var newState = Object.assign({},state,{playing:false});
      newState.playedKey = Object.assign({},newState.playedKey);
      delete newState.playedKey[action.key];
      return newState;
    default:
      return state;
  }
}

export function tone(state, action){
  if(state == undefined){
    state = {};
  }
  return state;
}
