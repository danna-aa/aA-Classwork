import * as PokemonAPIUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";

export const receiveAllPokemon = payload => ({
  type: RECEIVE_ALL_POKEMON,
  payload
})

export const receivePoke = payload => ({
  type: RECEIVE_POKE,
  payload
})