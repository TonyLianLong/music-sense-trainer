import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Piano from './components/Piano';
import * as actions from './actions';

class MainApp extends Component {
  render() {
    const { dispatch, selectedKey } = this.props;
    return (
      <div>
        <p>Hey Piano</p>
        <Piano keyMap={[["A2"],["B2", "As2"],["C3"],["D3", "Cs3"],["E3", "Ds3"],["F3"],["G3", "Fs3"],["A3", "Gs3"],["B3", "As3"]]}
        onPianoKeyDown={key=>dispatch(actions.keyDown(key))} onPianoKeyUp={key=>dispatch(actions.keyUp(key))} selectedKey={selectedKey}/>
      </div>
    )
  }
}
MainApp.propTypes = {
  selectedKey: PropTypes.string,
}
function select(state) {
  return {selectedKey: state.selectedKey };
}

export default connect(select)(MainApp);
