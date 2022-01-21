const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const query = process.argv[2];

if (query) {
  geocode(query, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(`Location: ${location}\nForecast: ${forecastData}`);
    });
  });
} else {
  console.log("You must enter a location!");
}
