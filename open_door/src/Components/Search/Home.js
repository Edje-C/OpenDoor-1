import React, { Component } from "react";
import Results from "./Results";
import { getBuildingByAddress } from "../../api";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      results: [],
      classes: false
    };
  }

  userSearch = e => {
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
            results: res.data,
            classes: true
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
      <div id="home">
        <div className="filter"><h1>OpenDoor</h1>
        <input
          className={this.state.classes ? '' : 'search_bar2'}
          id="search_bar"
          type="text"
          value={inputValue}
          onChange={userSearch}
          placeholder="ex. 9 Cabrini Boulevard"
        />
        <button id="search_btn" onClick={submitResults}>
          Search
        </button></div>

        <div className={this.state.classes? '': 'z'}><Results results={results} /></div>
      </div>
    );
  }
}

export default Home;
