import React, { Component } from "react";
import { Link } from "react-router-dom";
import Building from "./Building/Building";

class Display extends Component {
  render() {
    const { results } = this.props;
    console.log("Resuts:", results);
    return (
      <div>
        {results.map(b => (
            <div className="results_container">
            <Link to="/building">
              <div
                className="building"
                onClick={() => (
                  <Building address={b.housenumber + " " + b.streetname} />
                )}
              >
                <span>{b.housenumber}</span> <span>{b.streetname}</span>{" "}
                <span>{b.borough}</span> <span>{b.zip}</span>{" "}
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Display;
