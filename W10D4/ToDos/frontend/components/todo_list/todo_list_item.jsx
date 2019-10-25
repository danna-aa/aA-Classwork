import React from 'react';

const TodoListItem = (props) => {
  console.log(props)
  return(
    <li key={props.props.id} id={props.props.id} className="todo-li">
      <ul className="todo-ul">
        <li className="title">{props.props.title}</li>
        <li className="body">{props.props.body}</li>
        <li className="done">{props.props.done.toString()}</li>
      </ul>
    </li>
    );
  };
  
  export default TodoListItem;