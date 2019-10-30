import * as PokemonAPIUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";
// export const REQUEST_ALL_POKEMON = "REQUEST_ALL_POKEMON";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receivePoke = pokemon => ({
  type: RECEIVE_POKE,
  pokemon
})

export const requestAllPokemon = () => (dispatch) => (
  PokemonAPIUtil.fetchAllPokemon()
  .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
)