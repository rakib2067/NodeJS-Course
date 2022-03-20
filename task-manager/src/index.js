const express = require("express");
require("./db/mongoose");
//linking the mongoose file causes it to run and creates the connection to the database
const User = require("./models/user");
const Task = require("./models/task");
const e = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// This automatically parses incoming requests so we can access them as JSON objects

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    let response = await user.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    let response = await User.find({});
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    let response = await User.findById(_id);
    if (!response) {
      return res.status(404).send();
    }
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid Updates" });
  }

  try {
    let response = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!response) {
      res.status(404).send();
    }

    res.send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const task = new Task(req.body);
    let response = await task.save();
    res.status(201).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    let response = await Task.find({});
    if (!response) {
      return res.status(404).send();
    }
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/tasks/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    let response = await Task.findById(_id);
    if (!response) {
      return res.status(404).send();
    }
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});
