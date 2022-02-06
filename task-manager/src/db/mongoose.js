const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

const User = mongoose.model("User", {
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
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
});

const Task = mongoose.model("Task", {
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const me = new User({
  name: "Ismael                       ",
  email: "Ismael@gmail.com",
});
me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error", error);
  });

// const task = new Task({
//   title: "Finish Node JS Course",
//   description: "Complete the Node JS course I purchased through Udemy",
//   completed: false,
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });
