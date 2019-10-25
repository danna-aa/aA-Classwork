
import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {

  render() {
    const { todos, receiveTodo, receiveTodos, removeTodo } = this.props;
    console.log(removeTodo);
    
    return (
      <div>
        <ul className="todo-list">
          {todos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} removeTodo={removeTodo} />
          ))}
        </ul>
        <TodoForm receiveTodo={receiveTodo} />
      </div>
    );
  }
}

export default TodoList;