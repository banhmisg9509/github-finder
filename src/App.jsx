import { findUsers } from 'api';
import { About, Alert, NavBar, Home } from 'components';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  state = { users: [], loading: false, alert: null };

  searchUsers = async (searchText) => {
    this.setState({ loading: true });
    const users = await findUsers(searchText);
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
      <Router>
        <Fragment>
          <NavBar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                component={() => (
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
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}
