import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer'

// export default entitiesReducer = () => {
//   return combineReducers({
//     pokemon: pokemonReducer //more later
//   })
// }

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer
})

export default entitiesReducer;
