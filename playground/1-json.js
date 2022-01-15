const fs = require("fs");
// const book = {
//   title: "Atomic Habits",
//   author: "James Clear",
// };

// // const bookJSON = JSON.stringify(book);

// // fs.writeFileSync("book.json", bookJSON);

// const dataBuffer = fs.readFileSync("book.json");

// const dataJSON = dataBuffer.toString();

// const data = JSON.parse(dataJSON);

// console.log(data.title);

const dataJSON = fs.readFileSync("tutorial.json").toString();

const data = JSON.parse(dataJSON);
data.name = "Rakib";
data.age = "21";
fs.writeFileSync("tutorial.json", JSON.stringify(data));
