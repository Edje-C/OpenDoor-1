import React, { Component } from "react";
import { Link } from "react-router-dom";
import Building from "./Building/Building";

class Display extends Component {
  render() {
    const { uniqueBuildingsArr } = this.props;
    console.log("Resuts:", uniqueBuildingsArr);
    return (
      <div>
        {uniqueBuildingsArr.map(building => (
            <div className="results_container">
            <Link to="/building">
              <div
                className="building"
                onClick={() => (
                  <Building address={building.housenumber + " " + building.streetname} />
                )}
              >
                <span>{building.housenumber}</span> <span>{building.streetname}</span>{" "}
                <span>{building.boro}</span> <span>{building.zip}</span>{" "}
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Display;
