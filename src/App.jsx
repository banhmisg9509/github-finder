import { About, Alert, Home, NavBar, User, NotFound } from 'components';
import { AlertState, GithubState } from 'context';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <NavBar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
