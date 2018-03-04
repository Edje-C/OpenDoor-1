import React, { Component } from "react";
import Results from "./Results";
import { getBuildingByAddress } from "../../api";
import Building from "./Building/Building";

class Home extends Component {
  constructor() {
    super();
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

    let houseNum = inputValue.split(' ').slice(0,1).join('')
    let streetName = inputValue.split(' ').slice(1).join('')

    if (inputValue) {
        getBuildingByAddress(houseNum,streetName)
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
