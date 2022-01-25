const getForecast = (event) => {
  const weatherForm = document.querySelector("#weatherForm");
  const addressInput = document.querySelector("#address");
  const type = document.querySelector("#type");
  const message = document.querySelector("#message");

  weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const address = addressInput.value;

    //fetch request using provided address
    fetch("http://localhost:3000/weather?address=" + address).then(
      (response) => {
        response.json().then((data) => {
          if (data.error) {
            console.log(data.error);
            type.innerHTML = "Error";
            message.innerHTML = data.error;
          } else {
            console.log(data.location);
            type.innerHTML = data.location;
            message.innerHTML = data.forecast;
            console.log(data.forecast);
          }
        });
      }
    );
  });
};
