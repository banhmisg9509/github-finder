import { NavBar, Users, Search, Alert } from 'components';
import React, { Component, Fragment } from 'react';
import './App.css';
import { searchUsers } from 'api';

export default class App extends Component {
  state = { users: [], loading: false, alert: null };

  onSubmit = async (searchText) => {
    this.setState({ loading: true });
    const users = await searchUsers(searchText);
    this.setState({ users: users, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  render() {
    const { users, loading, alert } = this.state;
    return (
      <Fragment>
        <NavBar />
        <div className='container'>
          <Alert alert={alert} />
          <Search
            onSubmit={this.onSubmit}
            clearUsers={this.clearUsers}
            showClear={users.length > 0}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </Fragment>
    );
  }
}
