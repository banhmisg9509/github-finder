import { NavBar, Users } from 'components';
import React, { Component, Fragment } from 'react';
import './App.css';
import { fetchUsers } from 'api';

export default class App extends Component {
  state = { users: [] };

  async componentDidMount() {
    const users = await fetchUsers();
    this.setState({ users: users})
  }

  render() {
    const { users } = this.state;
    return (
      <Fragment>
        <NavBar />
        <Users users={users} />
      </Fragment>
    );
  }
}
