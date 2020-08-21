import { findUsers, getUser, getUserRepos } from 'api';
import { About, Alert, Home, NavBar, User } from 'components';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  state = { users: [], user: {}, repos: [], loading: false, alert: null };

  searchUsers = async (searchText) => {
    this.setState({ loading: true });
    const users = await findUsers(searchText);
    this.setState({ users: users, loading: false });
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const user = await getUser(username);
    this.setState({ user, loading: false });
  };

  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const repos = await getUserRepos(username);
    this.setState({ repos, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };

  render() {
    const { users, repos, user, loading, alert } = this.state;
    return (
      <Router>
        <Fragment>
          <NavBar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={() => (
                  <Home
                    users={users}
                    loading={loading}
                    clearUsers={this.clearUsers}
                    setAlert={this.setAlert}
                    searchUsers={this.searchUsers}
                  />
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}
