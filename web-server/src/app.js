const path = require("path");
const express = require("express");

const app = express();

const publicDirectory = path.join(__dirname, "../public");

app.use(express.static(publicDirectory));

app.set("view engine", "hbs");
app.get("", (req, res) => {
  res.render("index", { title: "Weather App", name: "Rakib" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me", name: "Rakib Ali" });
});

app.get("/help", (req, res) => {
  res.render("help", { title: "Help", message: "How to Node?" });
});

app.get("/weather", (req, res) => {
  res.send({ temp: "27 degrees", location: "London", precipitation: 23 });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
