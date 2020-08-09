import { NavBar, UserItem } from 'components';
import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <UserItem />
      </div>
    );
  }
}
