import React, { useState } from "react";
import AddTodo from "./components/addTodo";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const initialState = [];
  const [todo, setTodo] = useState(initialState);
  const [userInput, setUserInput] = useState("");

  const addTodoToState = (name) => {
    const newTodos = [...todo, { name, id: uuidv4() }];
    setTodo(newTodos);
  };
  const handleDelete = (id) => {
    const newItem = todo.filter((el) => el.id !== id);
    setTodo(newItem);
  };
  const changeTodoText = (event) => {
    setUserInput(event.target.value);
  };
  const handleChange = (event) => {
    event.preventDefault();
    addTodoToState(userInput);
    setUserInput("");
  };
  const handleDeleteall = () => {
    setTodo([]);
  };

  return (
    <div className="App">
      <h2>There are {todo.length} items in the list</h2>
      {todo.map((item) => {
        return (
          <ul key={item.id}>
            <li>
              {item.name}
              <button
                className="btn btn-danger  m-2"
                onClick={() => handleDelete(item.id)}
              >
                delete
              </button>
            </li>
          </ul>
        );
      })}
      <AddTodo
        addTodo={addTodoToState}
        handleDelete={handleDelete}
        handleChange={handleChange}
        value={userInput}
        changeTodoText={changeTodoText}
      />
      <button
        type="button"
        onClick={handleDeleteall}
        className="btn btn-danger  m-2"
      >
        delete all
      </button>
    </div>
  );
}
