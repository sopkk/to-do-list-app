import React, { Component } from "react";
import "./ToDo.css";

class ToDo extends Component {
  state = { isEditing: false, task: this.props.task };

  handleRemove = e => {
    this.props.removeTodo(this.props.id);
  };

  toggleForm = e => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = e => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleForm();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleToggle = () => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let result;
    console.log(this.props);
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <li
            onClick={this.handleToggle}
            className={this.props.completed ? "completed" : ""}
          >
            {this.props.task}
          </li>
          <button onClick={this.toggleForm}>edit</button>
          <button onClick={this.handleRemove}>remove</button>
        </div>
      );
    }
    return result;
  }
}

export default ToDo;
