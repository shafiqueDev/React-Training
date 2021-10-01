import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    return (
      <div className="form-outline">
        <form onSubmit={this.props.handleChange}>
          <input
            className="form-control form-control-sm"
            type="text"
            onChange={this.props.changeTodoText}
            value={this.props.value}
          />
          <button type="submit" className="btn btn-primary  m-2">
            AddTodo
          </button>
        </form>
      </div>
    );
  }
}
