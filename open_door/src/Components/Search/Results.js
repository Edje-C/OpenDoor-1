import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Building from "./Building/Building";

class Display extends Component {
  render() {
    const { results } = this.props;
    return (
      <div>
        {results.map(b => (
            <div className="results_container">
            <Link to={`/building/${b.buildingid}`}>
              <div className="building">
                <span>{b.housenumber}</span> <span>{b.streetname}</span>{" "}
                <span>{b.boro}</span> <span>{b.zip}</span>{" "}
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Display;
