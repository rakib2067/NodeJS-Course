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
  if (!req.query.address) {
    return res.send("You must enter a valid query");
  }

  res.send({
    temp: "27 degrees",
    location: "London",
    precipitation: 23,
    address: req.query.address,
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help Article Not Found",
    name: "Rakib Ali",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page Not Found",
    name: "Rakib Ali",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
