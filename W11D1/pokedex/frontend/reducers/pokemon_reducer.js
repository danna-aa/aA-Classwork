import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_POKE } from '../actions/pokemon_actions';

export default pokemonReducer = () => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_ALL_POKEMON:
      return action.payload.pokemon;
    case RECEIVE_POKE:
      const newPoke = {[action.pokemon.id]: action.pokemon};
      return Object.assign({}, state, newPoke);
    default: 
      return state;
  }
}