import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Building from "./Building/Building";

class Display extends Component {
  render() {
<<<<<<< HEAD
    const { uniqueBuildingsArr } = this.props;
    console.log("Resuts:", uniqueBuildingsArr);
=======
    const { results } = this.props;
>>>>>>> 5c6a1ae7165a706f990d8c26071944c5efd92bd0
    return (
      <div>
        {uniqueBuildingsArr.map(building => (
            <div className="results_container">
<<<<<<< HEAD
            <Link to="/building">
              <div
                className="building"
                onClick={() => (
                  <Building address={building.housenumber + " " + building.streetname} />
                )}
              >
                <span>{building.housenumber}</span> <span>{building.streetname}</span>{" "}
                <span>{building.boro}</span> <span>{building.zip}</span>{" "}
=======
            <Link to={`/building/${b.buildingid}`}>
              <div className="building">
                <span>{b.housenumber}</span> <span>{b.streetname}</span>{" "}
                <span>{b.boro}</span> <span>{b.zip}</span>{" "}
>>>>>>> 5c6a1ae7165a706f990d8c26071944c5efd92bd0
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Display;
