import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/"><div id="logo"><i class="fas fa-home" />OpenDoor</div></Link>
          <input id="header-search"/>
          <input type="submit" id="header-submit"/>
        </nav>
      </div>
    );
  }
}

export default Header;
