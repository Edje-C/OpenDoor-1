import React, { Component } from "react";
import axios from "axios";
import Header from '../header';
import reviews from './seed';


class Building extends React.Component {
  constructor() {
    super();
    this.state = {
      building: [],
      violations: [],
      classes: false
    }
  }

  componentDidMount() {
    axios
      .get(
        `https://data.cityofnewyork.us/resource/b2iz-pps8.json?$where=buildingid=${
          this.props.match.params.id
        }&$order=approveddate%20desc&$limit=5`
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
    console.log('reviews', reviews)
    return (
      <div className="building">
        <Header/>
        <div id="building-content">
          <h2>{housenumber}{" "}{streetname}{", "}{boro}{", "}NY{" "}{zip}</h2>
          <img
            className="building-img"
            src={buildingURLs[Math.floor(Math.random() * buildingURLs.length)]}
            alt="building pix"
          />
          <button className="dropDown">Comments</button>
          <div id="violations" className={this.state.classes ? '' : 'z'}>
            {complaints.length > 0? complaints.map( (violation) => {
              return <p className="violation" key={violation}>{violation}</p>
            }): "No reported violations"}
          </div>
            <div id="reviews">
              {reviews.map(v => (
                  <div className="review">
                    <p class="title">{v.title}</p>
                    {v.approval? <i class="material-icons text-right">thumb_up</i> : <i class="material-icons">thumb_down</i>}
                    <p>{v.review}</p>
                    <p className="text-right">{v.name}</p>
                  </div>
              ))}
          </div>
        </div>
        <i class="material-icons text-right">add_circle</i>
      </div>
    );
  }
}
export default Building;
