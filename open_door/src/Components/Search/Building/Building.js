import React, { Component } from 'react';
let styles = {
  height: "100px",
  width: "100px"
}
class BuildingInfo extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h2>Address: </h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg" alt="building image" style={styles}>
        
      </div>
    )
  }
}
export default BuildingInfo;
