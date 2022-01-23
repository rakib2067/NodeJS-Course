// const { response } = require("express");

console.log("client side is loaded");

// fetch("http://localhost:3000/weather?address=London").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(`${data.location}\n${data.forecast}`);
//     }
//   });
// });

const getForecast = (event) => {
  const weatherForm = document.querySelector("#weatherForm");
  const addressInput = document.querySelector("#address");

  weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const address = addressInput.value;
    await fetch("http://localhost:3000/weather?address=" + address).then(
      (response) => {
        response.json().then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            console.log(data.location);
            console.log(data.forecast);
          }
        });
      }
    );
  });
};
