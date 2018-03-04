import React, { Component } from "react";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  google
} from "google-maps-react";
import { Redirect } from "react-router";
export class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
      buildingid: ""
    };
  }

  onMapClicked = id => {
    this.setState({
      selected: true,
      buildingid: id
    });
  };
  render() {
    const { selected, buildingid } = this.state;
    const style = {
      width: "700px",
      height: "300px"
    };

    if (selected) {
      return <Redirect to={`/building/${buildingid}`} />;
      this.setState({
        selected: false
      });
    }

    const { uniqueBuildingsArr } = this.props;
    return (
      <div id="map">
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 40.7128,
            lng: -73.935242
          }}
          zoom={11}
        >
          {uniqueBuildingsArr.map(building => (
            <Marker
              title={building.housenumber + " " + building.streetname }
              name={building.buildingid}
              position={{ lat: building.latitude, lng: building.longitude }}
              onClick={() => this.onMapClicked(building.buildingid)}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB9x-xro__HhNFBOM2XRzFnAGftvMGAxc0"
})(MapContainer);
