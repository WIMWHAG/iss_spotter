const request = require('request-promise-native');

const fetchMyIP = function(ip) {
  return request('http://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(ip) {
  const url = 'https://freegeoip.app/json/';
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(`error found: ${error}`);
        return;
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
        reject(Error(msg));
        return;
      }
      const {latitude, longitude} = JSON.parse(body);
      resolve({latitude, longitude});

    });
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };