// https://web.compass.lighthouselabs.ca/days/w02d4/activities/892
// Prints cat breed description with fetching data from TheCatAPI

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    // Parse string into JSON
    const data = JSON.parse(body);

    // If there's no matching breed, data will be an empty array
    const desc = (data.length === 0) ? null : data[0].description;
  
    callback(error, desc);
  });
};

module.exports = { fetchBreedDescription };
