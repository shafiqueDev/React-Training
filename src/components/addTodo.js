import React from "react";

export default function AddTodo(props) {
  return (
    <div className="form-outline">
      <form onSubmit={props.handleChange}>
        <input
          placeholder="enter some text"
          className="form-control form-control-sm"
          type="text"
          onChange={props.changeTodoText}
          value={props.value}
        />
        <button type="submit" className="btn btn-primary  m-2">
          AddTodo
        </button>
      </form>
    </div>
  );
}
