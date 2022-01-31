const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);
    db.collection("users").insertOne(
      { _id: id, name: "Imran Hussain", age: 23 },
      (error, result) => {
        if (error) {
          return console.log("Unable to return user");
        }
        console.log(result);
      }
    );

    // db.collection("users").insertMany(
    //   [
    //     { name: "Rakib Ali", age: 21 },
    //     { name: "John Doe", age: 15 },
    //     { name: "Sue Grey", age: 4 },
    //     { name: "Peter Jones", age: 22 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents");
    //     }
    //     console.log(result);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     { description: "Finish NodeJS Course", completed: false },
    //     { description: "Finish React Course", completed: true },
    //     { description: "Get a Job", completed: false },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents");
    //     }
    //     console.log(result);
    //   }
    // );
  }
);
