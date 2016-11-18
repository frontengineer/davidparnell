import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>David Parnells</h2>
        </div>
        {this.props.children}

      </div>
    );
  }
}

export default App;
