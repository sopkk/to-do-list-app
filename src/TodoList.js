import React, { Component } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";

class ToDoList extends Component {
  state = { todos: [] };

  create = newTodo => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  remove = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = id => {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  componentDidUpdate = (oldProps, oldState) => {
    console.log("component did update");
    console.log(oldState.todos);
    console.log(this.state.todos);
  };

  render() {
    const todos = this.state.todos.map(todo => (
      <ToDo
        {...todo}
        key={todo.id}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleCompletion}
      />
    ));
    return (
      <div>
        <h1>Todo List</h1>
        <NewToDoForm createTodo={this.create} />
        {todos}
      </div>
    );
  }
}

export default ToDoList;
