import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { ProgressBar } from "react-bootstrap";

import Header from '../header';
import reviews from './seed';


class Building extends React.Component {
  constructor() {
    super();
    this.state = {
      building: [],
      violations: [],
      render: false,
      likesPer: '',
      dislikePer: '',
    }
  }

  renderData = (e) => {
    e.target.id === "violations" ?
      this.setState({render: false}):
      this.setState({render: true})

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

  /**
   * @func upvotesAlgorithm
   * This function will handle the algorithm for the likes and dislikes percentage
   * by Kelvin 
   */
    upvotesAlgorithm = ()=> {

    }
  render() {
    const { building, violations } = this.state;

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
        <Link to="/add"><i id="add" class="material-icons">add_circle</i></Link>
        <div id="building-content">
          <h2>{housenumber}{" "}{streetname}{", "}{boro}{", "}NY{" "}{zip}</h2>
          <img
            className="building-img"
            src='https://newyorkyimby.com/wp-content/uploads/2016/05/201-207-Cabrini-Rendering-1024x683.jpg'
            alt="building pix"
          />
           <LinkContainer to={true}>
            <ProgressBar id='progress_bar'>
              <ProgressBar bsStyle="success" now={70} key={1} label={`Likes ${35}`}   />
              <ProgressBar bsStyle="danger" now={30} key={2} label={`Dislikes ${70}`} />
            </ProgressBar>
          </LinkContainer>
          <button className="dropDown" id="violations" onClick={this.renderData}>Violations</button>
          <button className="dropDown" id="comments" onClick={this.renderData}>Comments</button>
          <div id="data">
            {this.state.render?
              reviews.map(v => (
                <div className="review">
                  <p class="title">{v.title}</p>
                  {v.approval? <i class="material-icons review-approval right">thumb_up</i> : <i class="material-icons review-approval right">thumb_down</i>}
                  <p>{v.review}</p>
                  <p className="text-right">{v.name}</p>
                </div>
              )): complaints.length > 0? complaints.map( (violation) => {
                return <p className="violation" key={violation}>{violation}</p>
              }): "No reported violations"
            }
          </div>
        </div>
      </div>
    );
  }
}
export default Building;
