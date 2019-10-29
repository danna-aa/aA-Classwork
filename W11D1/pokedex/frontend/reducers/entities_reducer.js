import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer'

// export default entitiesReducer = () => {
//   return combineReducers({
//     pokemon: pokemonReducer //more later
//   })
// }

export default entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
})
