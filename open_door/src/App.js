import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getBuildingByBorough, getBuildingByStreet} from './api'

class App extends Component {
  render() {
  console.log(getBuildingByStreet)
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
