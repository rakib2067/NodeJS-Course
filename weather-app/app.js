const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// Forecast
forecast("London", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

// Geocoding

geocode("London", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
