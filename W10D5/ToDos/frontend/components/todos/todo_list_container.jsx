import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/seletors';
import { receiveTodos, receiveTodo, removeTodo, todoError } from '../../actions/todo_actions';

const mapStateToProps = state => ({
  todos: allTodos(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveTodos: todos => dispatch(receiveTodos(todos)),
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  todoError: todo => dispatch(todoError(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);