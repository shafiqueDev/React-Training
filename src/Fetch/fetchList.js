import React, { useEffect, useState } from "react";

export default function FetchList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => setUsers(user));
  }, []);

  function handleDelete(id) {
    const deleteItem = users.filter((item) => item.id !== id);

    setUsers(deleteItem);
  }

  function handleRemoveAll() {
    setUsers([]);
  }
  return (
    <div>
      <h1>There are {users.length} items in the list</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>username</th>
            <th>phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.username}</td>
                <td>{person.phone}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(person.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        type="button"
        onClick={handleRemoveAll}
        className="btn btn-secondary"
      >
        Delete all
      </button>
    </div>
  );
}
