let StartAudioContext = require('StartAudioContext');
let Tone = require("Tone");//TODO: Update to ES6 when available

StartAudioContext(Tone.context, "#root");
export function newSynth(){//create a simple synth
  let synth = new Tone.Synth().toMaster();
  return synth;
}

export let mainSynth = new Tone.PolySynth(4, Tone.Synth).toMaster();
