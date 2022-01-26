const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

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

// Forecast endpoint
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "You must enter a valid query" });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forecast(latitude, longitude, (error, data) => {
        if (error) {
          return res.send({ error });
        }
        // console.log(data);
        return res.send({
          forecast: data,
          location,
          address: req.query.address,
        });
      });
    }
  );
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

app.listen(port, () => {
  console.log("server is up on port " + port);
});
