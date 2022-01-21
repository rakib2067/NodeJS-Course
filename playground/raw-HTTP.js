const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=eb256eba88cb08519851d4e6cb09de1b&query=London";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("Error: ", error);
});

request.end();
