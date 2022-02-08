const express = require("express");
require("./db/mongoose");
//linking the mongoose file causes it to run and creates the connection to the database
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// This automatically parses incoming requests so we can access them as JSON objects

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

app.post("/users", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      console.log(user);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});
