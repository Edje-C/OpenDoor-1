const axios = require('axios');

export const getBuildingByBorough = (borough) => {
  borough = borough.toUpperCase();
  axios
    .get(`https://data.cityofnewyork.us/resource/jspd-2hr7.json?$where=borough%20like%20%27%25${borough}%25%27&$order=receiveddate%20desc&$limit=100`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}

export const getBuildingByStreet = (streetName) => {
  streetName = streetName.toUpperCase().split(' ').join('%25');
  axios
    .get(`https://data.cityofnewyork.us/resource/jspd-2hr7.json?$where=streetname%20like%20%27%25${streetName}%25%27&$order=receiveddate%20desc&$limit=100`)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
}
