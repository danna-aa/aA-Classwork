import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
  todos: todosReducer
  // biscuits: () => ({}),
});

export default rootReducer;