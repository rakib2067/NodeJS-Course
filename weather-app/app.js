const request = require("request");
const apiKey = "eb256eba88cb08519851d4e6cb09de1b";

const url =
  "http://api.weatherstack.com/current?access_key=eb256eba88cb08519851d4e6cb09de1b&query=London";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
