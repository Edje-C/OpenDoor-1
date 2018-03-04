import React, { Component } from "react";
import Results from "./Results";
import { getBuildingByAddress, searchUniqueBuildings } from "../../helper";
import Building from "./Building/Building";
import {Link, Switch, Route} from 'react-router-dom'


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
        <Switch>
          <Route exact path={"/building/:id"} component={() => (
            <Building
              buildingsViolationsArr={buildingsViolationsArr}
            />
            )} />
        </Switch>
        <div>
          <form onSubmit={handleForm}>
            <input
              id="search_bar"
              type="text"
              value={searchInputValue}
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
