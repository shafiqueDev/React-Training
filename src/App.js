import React, { Component } from "react";
import AddTodo from "./components/addTodo";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    todo: [],
    todoText: "",
    value: "",
  };
  addTodoToState = (name) => {
    const newTodos = [...this.state.todo, { name, id: uuidv4() }];
    this.setState({
      todo: newTodos,
    });
  };
  handleDelete = (id) => {
    const newItem = this.state.todo.filter((el) => el.id !== id);
    this.setState({
      todo: newItem,
    });
  };
  changeTodoText = (event) => {
    this.setState({
      todoText: event.target.value,
      value: event.target.value,
    });
  };
  handleChange = (event) => {
    event.preventDefault();
    this.addTodoToState(this.state.todoText);
    this.setState({
      value: "",
    });
  };
  handleDeleteall = () => {
    this.setState({
      todo: [],
    });
  };
  render() {
    return (
      <div className="App">
        <h2>There are {this.state.todo.length} items in the list</h2>
        {this.state.todo.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                {item.name}
                <button
                  className="btn btn-danger  m-2"
                  onClick={() => this.handleDelete(item.id)}
                >
                  delete
                </button>
              </li>
            </ul>
          );
        })}
        <AddTodo
          addTodo={this.addTodoToState}
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          value={this.state.value}
          changeTodoText={this.changeTodoText}
        />
        <button
          type="button"
          onClick={this.handleDeleteall}
          className="btn btn-danger  m-2"
        >
          delete all
        </button>
      </div>
    );
  }
}
