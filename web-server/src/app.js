const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for express condig
const publicDirectory = path.join(__dirname, "../public");
const viewsDirectory = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Set up handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsDirectory);
hbs.registerPartials(partialsPath);

// Set up static directory to serve
app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", { title: "Weather App", name: "Rakib Ali" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Me", name: "Rakib Ali" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    message: "How to Node?",
    name: "Rakib Ali",
  });
});

app.get("/weather", (req, res) => {
  res.send({ temp: "27 degrees", location: "London", precipitation: 23 });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});