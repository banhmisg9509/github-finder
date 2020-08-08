import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  state = {
    name: 'ndhung',
    loading: false,
    showName: true,
  };

  render() {
    const { name, loading, showName } = this.state;
    return (
      <div className='App'>
        {loading ? <h4>Loading...</h4> : <h4>Hello {showName && name}</h4>}
        <div className='action'>
          <button  className='btn btn-outline-primary' onClick={() => this.setState({ loading: !loading })}>
            Toggle loading
          </button>
          <button className='btn btn-outline-primary' onClick={() => this.setState({ showName: !showName })}>
            Toggle show Name
          </button>
        </div>
      </div>
    );
  }
}
