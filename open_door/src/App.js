<<<<<<< HEAD
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
let styles = {
  height: "200px",
  width: "200px"
}
=======
import React, { Component } from "react";
import {Link, Switch, Route} from 'react-router-dom'
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Search/Home";

>>>>>>> 0d2a14f9b154e93e4b27a1d0c33d488d560c8ed0
class App extends Component {

  constructor() {
    super();
    this.state = {
      buildings: [],
      violations: []
    }
  }

  componentDidMount() {
    var api = "https://data.cityofnewyork.us/resource/b2iz-pps8.json";
    axios
      .get(api)
      .then( (res) => {
        this.setState({
          buildings: res.data
        })
      })
      .catch( (err) => {
        console.log(err);
      })
  }

  // buildings = (boro, streetname, housenumber) => {
  //   let address = boro + " " + streetname + " " + housenumber;
  //   const { buildings } = this.state;
  //   for (let i = 0; i < buildings.length; i++) {
  //     let building = buildings[i];
  //     console.log(building);
  //   }
  // }

  render() {
    const { violations, buildings } = this.state;

    let boro = "BROOKLYN";
    let streetname = "HANCOCK STREET";
    let housenumber = "1351";
    let complaints = [];
    let zip = [];
    for (let i = 0; i < buildings.length; i++) {
      let building = buildings[i];
      if (boro === building.boro && streetname === building.streetname && housenumber === building.housenumber) {
        zip = building.zip;
        complaints.push(building.novdescription);
      }
    }

    return (
      <div className="App">
<<<<<<< HEAD
      <h2>Address: {housenumber}{" "}{streetname}{", "}{boro}{", "}NY{", "}{zip}</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg" alt="building image" style={styles} />
        <div>
          {complaints.length > 0? complaints.map( (violation) => {
            return <p>{violation}</p>
          }): "no any violations"}
=======
        <div>
      <Switch>
        <Route exact path = "/" component={Home}/>
      </Switch>
>>>>>>> 0d2a14f9b154e93e4b27a1d0c33d488d560c8ed0
        </div>
      </div>
    );
  }
}

export default App;
