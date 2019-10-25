import { RECEIVE_TODO } from "../actions/todo_actions";
import { RECEIVE_TODOS } from "../actions/todo_actions";

// const todosReducer = (state = {}, action) => {
//   Object.freeze(state);
//   const nextState = Object.assign({}, state);

//   switch (action.type) {
//     case (RECEIVE_TODOS)
//   }
// }

// reducers/todos_reducer.js
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case (RECEIVE_TODOS):
      return action.todos;
      
    case (RECEIVE_TODO):
      // let todo = {[action.todo.id]: action.todo} 
      // return todo;
      nextState[action.todo.id] = action.todo; 
      return nextState;

    default:
      return state;
  }
};

export default todosReducer;



