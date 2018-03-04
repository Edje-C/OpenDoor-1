import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router";
import axios from "axios";
import Results from "./Results";
import { getBuildingByAddress} from "../../api";

class Home extends Component {
  constructor() {
    super();
    this.borough = [
      "brooklyn",
      "queens",
      "manhattan",
      "bronx",
      "staten island"
    ];
    this.state = {
      inputValue: "",
      results: [],
      submitted: false
    };
  }

  // getAllBuildings = () => {
  //     axios
  //     .get('')
  //     .then(res => {
  //         this.setState({
  //             allBldg: res.data
  //         })
  //     })
  // }

  userSearch = e => {
    const { allBldg } = this.state;
    this.setState({
      inputValue: e.target.value
    });
  };

  submitResults = () => {
    const { results, inputValue } = this.state;
    const { borough } = this;
    this.setState({
      submitted: true
    });

    if (borough.includes(inputValue)) {
      getBuildingByAddress(inputValue)
        .then(res => {
          this.setState({
            results: res.data
          });
        })
        .catch(err => console.log("Error:", err));
    }
  };

  sendDataToResults = () => {
    const { results } = this.state;
      return  <Results results={results} />;
  }

  render() {
    const { inputValue, submitted, results } = this.state;
    const { userSearch, submitResults, sendDataToResults } = this;
    console.log(results, inputValue);

    if (results[0]) {

      <Redirect to="/results" />;
    }

    return (
        <div>
        <div className='filter'>
          <h1>OpenDoor</h1></div>
          <form id="search_form">
            {/* <p id="search_title">Search For Borough or Address:</p>  */}
            <input
              id="search_bar"
              type="text"
              value={inputValue}
              onChange={userSearch}
              placeholder="ex. 9, Cabrini Boulevard"
            />
            <button id="search_btn" onClick={submitResults}>
            Search
            </button>
          </form>

          <Switch>
              <Route exact path = '/results' render={sendDataToResults} />
          </Switch>
        </div>
    );
  }
}

export default Home;
