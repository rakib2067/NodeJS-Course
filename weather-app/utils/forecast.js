const request = require("request");

const forecast = (location, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=eb256eba88cb08519851d4e6cb09de1b&query=" +
    location;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("OS Level Error: Are you connected to Wifi?", undefined);
    } else if (response.body.error) {
      callback(
        `Error ${response.body.error.type}: ${response.body.error.info}`,
        undefined
      );
    } else {
      data = response.body.current;
      callback(
        undefined,
        `${data.weather_descriptions[0]}: It is currently ${data.temperature} degrees outside. It feels like ${data.feelslike} degrees`
      );
    }
  });
};

module.exports = forecast;
