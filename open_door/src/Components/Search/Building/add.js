import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Header from '../header'

class Add extends Component {
  render() {
    return (
      <div>
      <Header/>
      <form id="add-form">
        <p>Name</p><input type="text"/>
        <p>Headline</p><input type="text"/>
        <p>Comment</p><textarea cols="61" rows="25" />
        <div id="radio-box">
          <p>Approval</p>
          <input type="radio" /><i class="material-icons">thumb_up</i>
          <input type="radio" /><i class="material-icons">thumb_down</i>
        </div>
        <Link to="/building/8807"><input type="submit" /></Link>
      </form>
      </div>
    );
  }
}

export default Add;
