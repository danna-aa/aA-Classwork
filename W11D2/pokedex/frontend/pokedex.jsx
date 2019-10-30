import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, receivePoke, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon, fetchPoke } from './util/api_util';
import configureStore from './store/store';
import selectAllPokemon from './reducers/selectors'
import Root from './components/root';

// document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore();
//   const root = document.getElementById('root');
//   window.store = store;
//   ReactDOM.render(<Root store={store} />, root);
// })

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
  
  window.receiveAllPokemon = receiveAllPokemon;
  window.receivePoke = receivePoke;
  window.fetchAllPokemon = fetchAllPokemon;
  window.requestAllPokemon = requestAllPokemon;
  window.fetchPoke = fetchPoke;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.selectAllPokemon = selectAllPokemon;
});
