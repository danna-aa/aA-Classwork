import React from 'react';
import uniqueId from '../../util/uniqueId';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <h2 className="form-title">Add To Do</h2>
        <label><h3>Title</h3>

          <input
            className="input"
            ref="title"
            value={this.state.title}
            placeholder="thing to do"
            onChange={this.update('title')}
            required />
        </label>
        <br />
        <label><h3>Description</h3>

          <textarea
            className="input"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="notes"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <br />
        <button className="create-button">Submit</button>
      </form>
    );
  }
};

export default TodoForm;