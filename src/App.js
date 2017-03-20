import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GoogleSignIn from './GoogleSignIn'

class App extends Component {
  render() {
    console.log(window.gapi)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <GoogleSignIn />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
