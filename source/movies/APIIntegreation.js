const request = require('request-promise');

// async function getRating(moviename) {
//   const url = `http://www.omdbapi.com/?t=${moviename}&apikey=e37863d`;

//   await request(url, (err, response, body) => {
//     if (err) {
//       throw err;
//     }
//     const jsonob = JSON.parse(body);
//     const rating = jsonob.imdbRating;
//     console.log(rating);
//     return rating;
//   });
// }

async function getRating(moviename) {
  const options = {
    uri: `http://www.omdbapi.com/?t=${moviename}&apikey=e37863d`,
    headers: {
      'User-Agent': 'Request-Promise',
    },
    json: true, // Automatically parses the JSON string in the response
  };

  const data = await request(options);
  const rating = data.imdbRating;
  return rating;
}
module.exports = {
  getRating,
};
