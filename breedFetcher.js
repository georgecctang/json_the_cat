// https://web.compass.lighthouselabs.ca/days/w02d4/activities/892

// Prints cat breed description with fetching data from TheCatAPI

const request = require('request');

// Process user input
// The id has 4 small letters 
const breedInput = process.argv[2].slice(0,4).toLowerCase();

request.get(`https://api.thecatapi.com/v1/images/search?breed_id=${breedInput}`, (error, response, body) => {
  if (error) {
    throw new Error(error);
  }
  const data = JSON.parse(body);
  // Returns empty array if breed not found
  if (data.length === 0) {
    console.log ('Breed not found. Please try again.');
  } else {
    console.log(data[0].breeds[0].description);
  }
}); 