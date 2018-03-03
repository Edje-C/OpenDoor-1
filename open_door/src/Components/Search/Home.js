import React, { Component } from "react";
import Results from "./Results";
import { getBuildingByBorough, getBuildingByStreet } from "../../api";

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
      results: []
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

    if (borough.includes(inputValue)) {
      getBuildingByBorough(inputValue)
        .then(res => {
          this.setState({
            results: res.data
          });
        })
        .catch(err => console.log("Error:", err));
    } else {
      getBuildingByStreet(inputValue)
        .then(res => {
          this.setState({
            results: res.data
          });
        })
        .catch(err => console.log("Error:", err));
    }
  };

  render() {
    const { inputValue, submitted, results } = this.state;
    const { userSearch, submitResults, sendDataToResults } = this;
    console.log(results, inputValue);

    return (
      <div>
        <input
          id="search_bar"
          type="text"
          value={inputValue}
          onChange={userSearch}
          placeholder="Bldng Number, Street Name, Borough"
        />
        <button id="search_btn" onClick={submitResults}>
          Search
        </button>

        <div>{<Results results={results} />}</div>
      </div>
    );
  }
}

export default Home;
