import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Piano from './components/Piano';
import * as actions from './actions';
import {GAME_STATE_GUESS, GAME_STATE_PIANO} from './reducers';

class MainApp extends Component {
  render() {
    const { dispatch, selectedKey, instruction, redKey, greenKey } = this.props;
    const keyMap = [[["A2"]],
      [["B2"], ["As2"]], [["C3"]], [["D3"], ["Cs3"]],
      [["E3"], ["Ds3"]], [["F3"]], [["G3"], ["Fs3"]],
      [["A3"], ["Gs3"]], [["B3"], ["As3"]]];
    console.log("Red Green Key", redKey, greenKey);
    for (var i = 0; i < keyMap.length; i++){
      for (var j = 0; j < keyMap[i].length; j++){
        if(keyMap[i][j][0] == redKey){
          if(j == 0){
            keyMap[i][j][1] = "red-white-key";
          }else{
            keyMap[i][j][1] = "red-black-key";
          }
        }else if(keyMap[i][j][0] == greenKey){
          if(j == 0){
            keyMap[i][j][1] = "green-white-key";
          }else{
            keyMap[i][j][1] = "green-black-key";
          }
        }
      }
    }
    return (
      <div>
        <div>
          <p>{instruction}</p>
          <Piano keyMap={keyMap}
          onPianoKeyDown={key=>dispatch(actions.keyDown(key))} onPianoKeyUp={key=>dispatch(actions.keyUp(key))} />
        </div>
        <div className="panel">
          <input type="button" value="Next Round" onClick={()=>dispatch(actions.nextRound())} />
        </div>
      </div>
    );
  }
}

MainApp.propTypes = {
  selectedKey: PropTypes.objectOf(PropTypes.bool).isRequired,
  instruction: PropTypes.string.isRequired,
  redKey: PropTypes.string,
  greenKey: PropTypes.string
}
function select(state) {
  var props = { selectedKey: state.game.playedKey, //keys currently down (playing)
    redKey: state.game.redKey,
    greenKey: state.game.greenKey
  };
  switch(state.game.gameState) {
    case GAME_STATE_GUESS:
      props.instruction = "Guess which note it is";
    break;
    case GAME_STATE_PIANO:
      props.instruction = "Music Sense Trainer";
    break;
    default:
      props.instruction = `Music Sense Trainer ${state.game.gameState}`;
    break;
  }
  return props;
}

export default connect(select)(MainApp);
