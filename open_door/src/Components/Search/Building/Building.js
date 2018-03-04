import React, { Component } from "react";
import axios from "axios";


class Building extends React.Component {
  constructor() {
    super();
    this.state = {
      building: [],
      violations: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://data.cityofnewyork.us/resource/b2iz-pps8.json?$where=buildingid=${
          this.props.match.params.id
        }&$order=approveddate%20desc&$limit=100`
      )
      .then(res => {
        this.setState({
          building: res.data[0],
          violations: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { building, violations } = this.state;
    let buildingURLs = [
      "http://assets.nydailynews.com/polopoly_fs/1.1043342.1332131859!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/love-buidling-jpg.jpg",
      "https://www.emporis.com/images/show/503878-Large-fullheightview-view-from-the-southwest-at-adams-and-willoughby-streets.jpg",
      "https://brooklyngrowler.files.wordpress.com/2010/10/federal-today.jpg",
      "http://cdn-img3.streeteasy.com/nyc/image/35/203723935.jpg",
      "http://www.inetours.com/New_York/Images/Brklyn/Brklyn-4_8797.jpg",
      "http://static.panoramio.com/photos/large/31391909.jpg",
      "http://everystockphoto.s3.amazonaws.com/brooklyn_newyorkcity_newyork_1224138_o.jpg",
      "http://cdn-img-feed.streeteasy.com/nyc/image/92/201507392.jpg"
    ];

    let complaints = [];
    violations.forEach(b => {
      complaints.push(b.novdescription);
    });

    let boro = building.boro;
    let streetname = building.streetname;
    let housenumber = building.housenumber;
    let zip = building.zip;

    return (
      <div className="App">
        <h2>
          Address: {housenumber} {streetname}
          {", "}
          {boro}
          {", "}NY{", "}
          {zip}
        </h2>
        <img
          src={buildingURLs[Math.floor(Math.random() * buildingURLs.length)]}
          alt="building pix"
        />
      
        <div>
          {complaints.length > 0
            ? complaints.map(violation => {
                return <p key={violation}>{violation}</p>;
              })
            : "no any violations"}
        </div>
      </div>
    );
  }
}
export default Building;
