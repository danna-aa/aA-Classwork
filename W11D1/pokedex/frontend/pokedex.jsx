import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, receivePoke } from './actions/pokemon_actions';
import { fetchAllPokemon, fetchPoke } from './util/api_util';

// document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore();
//   const root = document.getElementById('root');
//   window.store = store;
//   ReactDOM.render(<Root store={store} />, root);
// })

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});

window.receiveAllPokemon = receiveAllPokemon;
window.receivePoke = receivePoke;
window.fetchAllPokemon = fetchAllPokemon;
window.fetchPoke = fetchPoke;