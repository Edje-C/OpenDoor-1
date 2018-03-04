import React, { Component } from "react";
import Results from "./Results";
import { getBuildingByAddress, searchUniqueBuildings } from "../../helper";
import Building from "./Building/Building";
import Map from "./Map";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchInputValue: "",
      buildingsViolationsArr: [],
      uniqueBuildingsArr: []
    };
  }

  handleSearchInput = e => {
    this.setState({
      searchInputValue: e.target.value
    });
  };

  handleForm = e => {
    e.preventDefault();
    const { searchInputValue } = this.state;

    if (searchInputValue) {
      const houseNum = searchInputValue.split(' ').slice(0,1).join('')
      const streetName = searchInputValue.split(' ').slice(1).join('')

      getBuildingByAddress(houseNum, streetName)
        .then(res => {
          this.setState({
            buildingsViolationsArr: res.data,
            uniqueBuildingsArr: searchUniqueBuildings(res.data)
          });
        })
        .catch(err => console.log("Error:", err));
    }
  };

  render() {
    const { searchInputValue, buildingsViolationsArr, uniqueBuildingsArr } = this.state;
    const { handleSearchInput, handleForm } = this;
    return (
      <div>
        <div>
          <form onSubmit={handleForm}>
            <input
              id="search_bar"
              type="text"
              value={searchInputValue}
              onChange={handleSearchInput}
              placeholder="Building #, Street Name"
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div>
          <Results
            uniqueBuildingsArr={uniqueBuildingsArr}
            buildingsViolationsArr={buildingsViolationsArr}
          />
        </div>
        <div></div>
          <Map 
          uniqueBuildingsArr={uniqueBuildingsArr}
          />
        </div>
    );
  }
}

export default Home;
