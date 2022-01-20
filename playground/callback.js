//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (first, second, callback) => {
  setTimeout(() => {
    callback(first + second);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});

// const request = require("request");
// const weatherKey = "eb256eba88cb08519851d4e6cb09de1b";

// const url =
//   "http://api.weatherstack.com/current?access_key=eb256eba88cb08519851d4e6cb09de1b&query=Hackney";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("OS Level Error: Are you connected to Wifi?");
//   } else if (response.body.error) {
//     console.log(
//       `Error ${response.body.error.type}: ${response.body.error.info}`
//     );
//   } else {
//     data = response.body.current;
//     console.log(
//       `${data.weather_descriptions[0]}: It is currently ${data.temperature} degrees outside. It feels like ${data.feelslike} degrees`
//     );
//   }
// });

// // Geocoding

// let newURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1IjoicmFraWI3NzciLCJhIjoiY2t5bHh2YmUwMHNkazJ3cG5uYjRlamN4NCJ9.lts4Fo4nACZEkn6vMP8Xiw&limit=1";

// request({ url: newURL, json: true }, (error, response) => {
//   if (error) {
//     console.log("OS Level Error: Are you connected to Wifi?");
//   } else if (response.body.features.length === 0) {
//     console.log("Error: Invalid Location");
//   } else {
//     const data = response.body;
//     console.log(`You searched for: ${data.query[0]}\nLatitude: ${data.features[0].center[1]}\nLongitude: ${data.features[0].center[0]}
//     `);
//   }
// });
