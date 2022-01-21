const path = require("path");
const express = require("express");

const app = express();

const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.send("Hello Express");
});

app.get("/weather", (req, res) => {
  res.send({ temp: "27 degrees", location: "London", precipitation: 23 });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
