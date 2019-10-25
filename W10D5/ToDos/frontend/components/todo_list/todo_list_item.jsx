import React from 'react';

const TodoListItem = (props) => {
  console.log(props)
  return(
    <li className="todo-list-item">
      <div className="todo-list-item-div">
        <h2 className="list-item-title">{props.todo.title}</h2>
        <ul>
          <li className="list-item-body">
            {props.todo.body}
          </li>
          <li className="list-item-done">
            {/* {`done: ${props.todo.done.toString()}`} */}
            {/* no functionality yet */}
            <button className="done-button">Done</button>
          </li>
          <button className="delete-button" onClick={() => props.removeTodo(props.todo)}>Delete</button>
        </ul>
      </div>
    </li>

    );
  };
  
  export default TodoListItem;