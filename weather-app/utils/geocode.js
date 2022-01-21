const request = require("request");

let geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoicmFraWI3NzciLCJhIjoiY2t5bHh2YmUwMHNkazJ3cG5uYjRlamN4NCJ9.lts4Fo4nACZEkn6vMP8Xiw&limit=1";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to internet!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Invalid Location", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;