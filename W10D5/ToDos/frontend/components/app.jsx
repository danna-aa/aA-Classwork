import React from 'react';
import TodoListContainer from '../components/todos/todo_list_container';

const App = () => {
  return (
    <div>
      <h1 className="title">To Do List</h1>
      <TodoListContainer />
    </div>
  )
}

export default App;