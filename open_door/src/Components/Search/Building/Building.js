import React, { Component } from 'react';
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
    const { violations, buildings } = this.state;

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
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Garfield_Building_Detroit.jpg" alt="building image" style={styles} />
        <div>
          {complaints.length > 0? complaints.map( (violation) => {
            return <p>{violation}</p>
          }): "no any violations"}
        </div>
      </div>
    );
  }
}
export default BuildingInfo;
