import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Search/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
