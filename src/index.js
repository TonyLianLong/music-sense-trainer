import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import MainApp from './MainApp'
import * as reducers from './reducers'
import 'beautiful-piano/styles.css';

const todoApp = combineReducers(reducers)
let store = createStore(todoApp)

let unsubscribe = store.subscribe(() =>
  console.log("State Update", store.getState())
)

let rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  rootElement
)
/*
//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");*/
