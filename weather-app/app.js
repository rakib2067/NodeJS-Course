const request = require("request");
const weatherKey = "eb256eba88cb08519851d4e6cb09de1b";
const geocode = require("./utils/geocode");

const url =
  "http://api.weatherstack.com/current?access_key=eb256eba88cb08519851d4e6cb09de1b&query=Hackney";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("OS Level Error: Are you connected to Wifi?");
  } else if (response.body.error) {
    console.log(
      `Error ${response.body.error.type}: ${response.body.error.info}`
    );
  } else {
    data = response.body.current;
    console.log(
      `${data.weather_descriptions[0]}: It is currently ${data.temperature} degrees outside. It feels like ${data.feelslike} degrees`
    );
  }
});

// Geocoding

geocode("London", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
