const axios = require('axios');

export const getBuildingByAddress = (houseNumber,streetName) => {
  streetName = streetName.toUpperCase().split(' ').join('%25');
  return axios
    .get(`https://data.cityofnewyork.us/resource/b2iz-pps8.json?$where=streetname%20like%20%27%25${streetName}%25%27&housenumber=${houseNumber}&$order=approveddate%20desc&$limit=100`)
}
