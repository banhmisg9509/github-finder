import { fetchUsers, fetchUser, fetchUserRepos } from 'api';
import { Alert, Home, NavBar, User, About } from 'components';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUsers = async (searchText) => {
    setLoading(true);
    const users = await fetchUsers(searchText);
    setUsers(users);
    setLoading(false);
  };

  const getUser = async (username) => {
    setLoading(true);
    const user = await fetchUser(username);
    setUser(user);
    setLoading(false);
  };

  const getUserRepos = async (username) => {
    setLoading(true);
    const repos = await fetchUserRepos(username);
    setRepos(repos);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const toggleAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 2000);
  };

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
                  clearUsers={clearUsers}
                  toggleAlert={toggleAlert}
                  searchUsers={searchUsers}
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
                  getUser={getUser}
                  getUserRepos={getUserRepos}
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

export default App;
