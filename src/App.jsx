import { NavBar, Users, Search } from 'components';
import React, { Component, Fragment } from 'react';
import './App.css';
import { searchUsers } from 'api';

export default class App extends Component {
  state = { users: [], loading: false };

  onSubmit = async (searchText) => {
    this.setState({ loading: true });
    const users = await searchUsers(searchText);
    this.setState({ users: users, loading: false });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <Fragment>
        <NavBar />
        <div className='container'>
          <Search onSubmit={this.onSubmit} />
          <Users loading={loading} users={users} />
        </div>
      </Fragment>
    );
  }
}
