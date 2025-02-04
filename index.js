const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (!breedName) {
  console.log('Please provide a breed name.');
  process.exit(1);
}

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetching details:', error);
  } else {
    console.log('Breed Description:', desc);
  }
});
