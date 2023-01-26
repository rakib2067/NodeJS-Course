const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/playground')
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function addCourse(){
  const course = new Course({
    name: "AWS - Certified Cloud Practicioner",
    author: "Stephane Maarek",
    tags: ["backend", "cloud"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result)
}

async function getCourses(){
  const courses = await Course.find();
  console.log(courses)
}

getCourses()

