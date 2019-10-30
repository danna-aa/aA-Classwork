import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_POKE } from '../actions/pokemon_actions';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKE:
      const newPoke = {[action.pokemon.id]: action.pokemon};
      return Object.assign({}, state, newPoke);
    default: 
      return state;
  }
}

export default pokemonReducer;