const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is Invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must ne a positive number.");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain the word password!");
      }
    },
  },
});

// const me = new User({
//   name: "  Tanweer  ",
//   email: "Tanweer@gmail.com",
//   age: 22,
//   password: "MakGrillz123",
// });
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

const Task = mongoose.model("Task", {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const task = new Task({
  title: "    Finish React Course    ",
  description: "    Complete the React course I purchased through Udemy   ",
});
task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log("Error", error);
  });
