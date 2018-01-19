import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Piano extends Component {
  render() {
    var keyMap = this.props.keyMap;
    return (
        <ul id="beautiful-piano">
          {keyMap.map((key, index) =>
            ((key.length == 1)?
              (<li key={index}>
                        <div className={"anchor "+key[0]}
                          onTouchStart={() => this.props.onPianoKeyDown(key[0])} onMouseDown={() => this.props.onPianoKeyDown(key[0])}
                          onTouchEnd={() => this.props.onPianoKeyUp(key[0])} onMouseUp={() => this.props.onPianoKeyUp(key[0])}></div>
                      </li>)
            :(<li key={index}>
                        <div className={"anchor "+key[0]}
                          onTouchStart={() => this.props.onPianoKeyDown(key[0])} onMouseDown={() => this.props.onPianoKeyDown(key[0])}
                          onTouchEnd={() => this.props.onPianoKeyUp(key[0])} onMouseUp={() => this.props.onPianoKeyUp(key[0])}></div>
                        <span className={key[1]}
                          onTouchStart={() => this.props.onPianoKeyDown(key[1])} onMouseDown={() => this.props.onPianoKeyDown(key[1])}
                          onTouchEnd={() => this.props.onPianoKeyUp(key[1])} onMouseUp={() => this.props.onPianoKeyUp(key[1])}></span>
                      </li>))
          )}
        </ul>
    );
  }
}
//TODO: Break into smaller components

/*
<li><div data-ipn="A2" data-keyname="A2" className="anchor A2"></div></li>
<li><div data-ipn="B2" data-keyname="B2" className="anchor B2"></div><span data-ipn="A#2" data-keyname="&nbsp;A#" className="As2 Bb2"></span></li>
<li><div data-ipn="C3" data-keyname="C3" className="anchor C3"></div></li>
<li><div data-ipn="D3" data-keyname="D3" className="anchor D3"></div><span data-ipn="C#3" data-keyname="&nbsp;C#" className="Cs3 Db3"></span></li>
<li><div data-ipn="E3" data-keyname="E3" className="anchor E3"></div><span data-ipn="D#3" data-keyname="&nbsp;D#" className="Ds3 Eb3"></span></li>
<li><div data-ipn="F3" data-keyname="F3" className="anchor F3"></div></li>
<li><div data-ipn="G3" data-keyname="G3" className="anchor G3"></div><span data-ipn="F#3" data-keyname="&nbsp;F#" className="Fs3 Gb3"></span></li>
<li><div data-ipn="A3" data-keyname="A3" className="anchor A3"></div><span data-ipn="G#3" data-keyname="&nbsp;G#" className="Gs3 Ab3"></span></li>
<li><div data-ipn="B3" data-keyname="B3" className="anchor B3"></div><span data-ipn="A#3" data-keyname="&nbsp;A#" className="As3 Bb3"></span></li>
<li><div data-ipn="C4" data-keyname="C4" className="anchor C4"></div></li>
<li><div data-ipn="D4" data-keyname="D4" className="anchor D4"></div><span data-ipn="C#4" data-keyname="&nbsp;C#" className="Cs4 Db4"></span></li>
<li><div data-ipn="E4" data-keyname="E4" className="anchor E4"></div><span data-ipn="D#4" data-keyname="&nbsp;D#" className="Ds4 Eb4"></span></li>
<li><div data-ipn="F4" data-keyname="F4" className="anchor F4"></div></li>
<li><div data-ipn="G4" data-keyname="G4" className="anchor G4"></div><span data-ipn="F#4" data-keyname="&nbsp;F#" className="Fs4 Gb4"></span></li>
<li><div data-ipn="A4" data-keyname="A4" className="anchor A4"></div><span data-ipn="G#4" data-keyname="&nbsp;G#" className="Gs4 Ab4"></span></li>
<li><div data-ipn="B4" data-keyname="B4" className="anchor B4"></div><span data-ipn="A#4" data-keyname="&nbsp;A#" className="As4 Bb4"></span></li>
<li><div data-ipn="C5" data-keyname="C5" className="anchor C5"></div></li>
<li><div data-ipn="D5" data-keyname="D5" className="anchor D5"></div><span data-ipn="C#5" data-keyname="&nbsp;C#" className="Cs5 Db5"></span></li>
<li><div data-ipn="E5" data-keyname="E5" className="anchor E5"></div><span data-ipn="D#5" data-keyname="&nbsp;D#" className="Ds5 Eb5"></span></li>
<li><div data-ipn="F5" data-keyname="F5" className="anchor F5"></div></li>
<li><div data-ipn="G5" data-keyname="G5" className="anchor G5"></div><span data-ipn="F#5" data-keyname="&nbsp;F#" className="Fs5 Gb5"></span></li>
<li><div data-ipn="A5" data-keyname="A5" className="anchor A5"></div><span data-ipn="G#5" data-keyname="&nbsp;G#" className="Gs5 Ab5"></span></li>
<li><div data-ipn="B5" data-keyname="B5" className="anchor B5"></div><span data-ipn="A#5" data-keyname="&nbsp;A#" className="As5 Bb5"></span></li>
<li><div data-ipn="C6" data-keyname="C6" className="anchor C6"></div></li>
*/

Piano.propTypes = {
  keyMap: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired)).isRequired,
  onPianoKeyDown: PropTypes.func.isRequired,
  onPianoKeyUp: PropTypes.func.isRequired
}
