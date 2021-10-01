import axios from "axios";
import React, { Component } from "react";

export default class AxiosList extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({
        users: res.data,
      });
    });
  }
  handleDelete = (id) => {
    const deleteItem = this.state.users.filter((item) => item.id !== id);
    this.setState({
      users: deleteItem,
    });
  };
  handleDeleteAll = () => {
    this.setState({
      users: [],
    });
  };
  render() {
    return (
      <div>
        <h1>There are {this.state.users.length} items in the list</h1>
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
            {this.state.users.map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.username}</td>
                  <td>{person.phone}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.handleDelete(person.id);
                      }}
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
          className="btn btn-secondary"
          onClick={this.handleDeleteAll}
        >
          Delete All
        </button>
      </div>
    );
  }
}
