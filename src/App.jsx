import { NavBar, Users } from 'components';
import React, { Component, Fragment } from 'react';
import './App.css';
import { fetchUsers } from 'api';

export default class App extends Component {
  state = { users: [], loading: false };

  async componentDidMount() {
    this.setState({ loading: true });
    const users = await fetchUsers();
    this.setState({ users: users, loading: false })
  }

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <NavBar />
        <Users loading={loading} users={users} />
      </Fragment>
    );
  }
}
