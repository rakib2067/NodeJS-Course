const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Geocoding
if (process.argv[2]) {
  geocode(process.argv[2], (error, data) => {
    if (error) {
      return console.log(error);
    }
    // Forecast
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(`Location: ${data.location}\nForecast: ${forecastData}`);
    });
  });
} else {
  console.log("You must enter a location!");
}
