const needle = require('needle');
console.log('Needle library loaded successfully!');

const breedName = 'Siberian';
const url = 'https://api.thecatapi.com/v1/breeds/search?q=sib';

needle.get(url, (error, response, body) => {
  if (error) {
    console.error('Error fetching breed data:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data. Status Code: ${response.statusCode}`);
    return;
  }

  console.log('API Response:', body);

  if (body.length === 0) {
    console.log(`Breed not found: ${breedName}`);
  } else {

    console.log(`Description for ${breedName};`, body[0].description);
  }

});