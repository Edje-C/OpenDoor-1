import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import axios from "axios";
let styles = {
  height: "100px",
  width: "100px"
}

class BuildingInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      buildings: [],
      violations: []
    }
  }

  componentDidMount() {
    var api = "https://data.cityofnewyork.us/resource/b2iz-pps8.json";
    axios
      .get(api)
      .then( (res) => {
        this.setState({
          buildings: res.data
        })
      })
      .catch( (err) => {
        console.log(err);
      })
  }

  // buildings = (boro, streetname, housenumber) => {
  //   let address = boro + " " + streetname + " " + housenumber;
  //   const { buildings } = this.state;
  //   for (let i = 0; i < buildings.length; i++) {
  //     let building = buildings[i];
  //     console.log(building);
  //   }
  // }

  render() {
    const { buildings } = this.state;
    const { address} = this.props;
    console.log(address);
    let buildingURLs =
    [
      "http://assets.nydailynews.com/polopoly_fs/1.1043342.1332131859!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/love-buidling-jpg.jpg",
      "https://www.emporis.com/images/show/503878-Large-fullheightview-view-from-the-southwest-at-adams-and-willoughby-streets.jpg",
      "https://brooklyngrowler.files.wordpress.com/2010/10/federal-today.jpg",
      "http://cdn-img3.streeteasy.com/nyc/image/35/203723935.jpg",
      "http://www.inetours.com/New_York/Images/Brklyn/Brklyn-4_8797.jpg",
      "https://images.search.yahoo.com/search/images;_ylt=AwrE1x72G5ta7qgAGQVXNyoA;_ylu=X3oDMTE0dW12cmtkBGNvbG8DYmYxBHBvcwMxBHZ0aWQDQjUyODVfMQRzZWMDcGl2cw--?p=brooklyn+building+image&fr2=piv-web&fr=yfp-t#id=2&iurl=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F03%2Fa2%2F99%2F19%2Fbuilding-92-brooklyn.jpg&action=click",
      "http://static.panoramio.com/photos/large/31391909.jpg",
      "http://everystockphoto.s3.amazonaws.com/brooklyn_newyorkcity_newyork_1224138_o.jpg",
      "http://cdn-img-feed.streeteasy.com/nyc/image/92/201507392.jpg",
      "http://www.brooklyneagle.com/sites/default/files/styles/panopoly_image_original/public/kushner-buildings.jpg?itok=p0GX1F0h"
    ]

    let boro = "BROOKLYN";
    let streetname = "HANCOCK STREET";
    let housenumber = "1351";
    let complaints = [];
    let zip = [];
    for (let i = 0; i < buildings.length; i++) {
      let building = buildings[i];
      if (boro === building.boro && streetname === building.streetname && housenumber === building.housenumber) {
        zip = building.zip;
        complaints.push(building.novdescription);
      }
    }
    return (
      <div className="App">
      <h2>Address: {housenumber}{" "}{streetname}{", "}{boro}{", "}NY{", "}{zip}</h2>
      <img
        src={buildingURLs[Math.floor(Math.random() * buildingURLs.length)]}
        alt="building pix"
        style={styles}
      />
        <div>
          {complaints.length > 0? complaints.map( (violation) => {
            return <p key={violation}>{violation}</p>
          }): "no any violations"}
        </div>
      </div>
    );
  }
}
export default BuildingInfo;
