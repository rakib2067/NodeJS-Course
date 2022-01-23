// const { response } = require("express");

console.log("client side is loaded");

fetch("http://localhost:3000/weather?address=London").then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(`${data.location}\n${data.forecast}`);
    }
  });
});
