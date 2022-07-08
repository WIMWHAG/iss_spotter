const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(body => console.log(body));