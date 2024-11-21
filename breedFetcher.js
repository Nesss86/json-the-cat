const needle = require('needle');
console.log('Needle library loaded successfully!');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      callback(`Failed to fetch data. Status Code: ${response.statusCode}`, null);
      return;
    }

    
    if (body.length === 0) {
      callback(`Breed not found: ${breedName}`, null);
      return;
    }

    
    callback(null, body[0].description);
  });
};


module.exports = { fetchBreedDescription };

