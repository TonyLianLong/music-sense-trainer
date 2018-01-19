import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, dispatch } from 'redux';
import MainApp from './MainApp';
import * as reducers from './reducers';
import 'beautiful-piano/styles.css';

const todoApp = combineReducers(reducers);
let store = createStore(todoApp);

let unsubscribe = store.subscribe(() =>
  console.log("State Update", store.getState())
);

let rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  rootElement
);
