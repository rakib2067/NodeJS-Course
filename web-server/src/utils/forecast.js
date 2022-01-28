const request = require("request");

const forecast = (lat, long, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=eb256eba88cb08519851d4e6cb09de1b&query=" +
    lat +
    "," +
    long;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("OS Level Error: Are you connected to Wifi?", undefined);
    } else if (body.error) {
      callback(`Error ${body.error.type}: ${body.error.info}`, undefined);
    } else {
      data = body.current;
      callback(
        undefined,
        `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees outside. It feels like ${data.feelslike} degrees.
        There is currently ${data.precip}% of raining with a humidity level of ${data.humidity} .`
      );
    }
  });
};

module.exports = forecast;
