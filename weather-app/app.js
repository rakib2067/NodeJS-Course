const request = require("request");
const weatherKey = "eb256eba88cb08519851d4e6cb09de1b";

const url =
  "http://api.weatherstack.com/current?access_key=eb256eba88cb08519851d4e6cb09de1b&query=London";

request({ url: url, json: true }, (error, response) => {
  data = response.body.current;
  console.log(
    `${data.weather_descriptions[0]}: It is currently ${data.temperature} degrees outside. It feels like ${data.feelslike} degrees`
  );
});

// Geocoding

url = `/geocoding/v5/mapbox.places/{search_text}.json`;
let geoKey =
  "pk.eyJ1IjoicmFraWI3NzciLCJhIjoiY2t5bHh2YmUwMHNkazJ3cG5uYjRlamN4NCJ9.lts4Fo4nACZEkn6vMP8Xiw";

let newURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1IjoicmFraWI3NzciLCJhIjoiY2t5bHh2YmUwMHNkazJ3cG5uYjRlamN4NCJ9.lts4Fo4nACZEkn6vMP8Xiw&limit=1";

request({ url: newURL, json: true }, (error, response) => {
  console.log(`You searched for: ${response.query[0]}/n
  You received results for ${response.features}
  `);
});
