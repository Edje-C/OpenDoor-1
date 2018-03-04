import React, { Component } from "react";
import Results from "./Results";
import { getBuildingByAddress } from "../../api";
import Building from "./Building/Building";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      buildingsViolationsArr: [],
      uniqueBuildingsArr: []
    };
  }

  getUniqueBuildings = arr => {
    let duplicates = [];

    return arr.filter(el => {
      if (!duplicates.includes(el.buildingid)) {
        duplicates.push(el.buildingid);
        return true;
      }
    })
  };

  handleSearchInput = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleForm = e => {
    e.preventDefault();

    const { buildingsViolationsArr, inputValue } = this.state;

    let houseNum = inputValue.split(' ').slice(0,1).join('')
    let streetName = inputValue.split(' ').slice(1).join('')

    if (inputValue) {
        getBuildingByAddress(houseNum,streetName)
        .then(res => {
          this.setState({
            buildingsViolationsArr: res.data,
            uniqueBuildingsArr: this.getUniqueBuildings(res.data)
          });
        })
        .catch(err => console.log("Error:", err));
    }
  };

  render() {
<<<<<<< HEAD
    const { inputValue, buildingsViolationsArr, uniqueBuildingsArr } = this.state;
    const { handleSearchInput, handleForm } = this;
>>>>>>> 5c6a1ae7165a706f990d8c26071944c5efd92bd0
    return (
      <div>
        <div>
          <form onSubmit={handleForm}>
            <input
              id="search_bar"
              type="text"
              value={inputValue}
              onChange={handleSearchInput}
              placeholder="Building #, Street Name"
            />
            <input type='submit' value='Search' />
          </form>
        </div>
        <div>
          <Results 
            uniqueBuildingsArr={uniqueBuildingsArr}
            buildingsViolationsArr={buildingsViolationsArr}
          />
        </div>
      </div>
    );
  }
}

export default Home;
