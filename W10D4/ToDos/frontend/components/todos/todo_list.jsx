import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';

const todoList = (props) => {
  return (
    <div>
      <h2>All Todos</h2>
      <ul className="all-todos">
        {props.todos.map((todo, i) => {
          return (
            <TodoListItem key={i} props={props.todos[i]} />
          )
        })}
      </ul>
    </div>
  );
};

export default todoList;