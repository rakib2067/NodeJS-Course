const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
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

// const me = new User({ name: "Rakib", age: 21 });
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

const task = new Task({
  title: "Finish Node JS Course",
  description: "Complete the Node JS course I purchased through Udemy",
  completed: false,
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log("Error", error);
  });
