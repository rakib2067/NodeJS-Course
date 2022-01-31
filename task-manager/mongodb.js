const { MongoClient, ObjectId } = require("mongodb");
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);
    db.collection("users").findOne({ name: "Imran Hussain" }, (error, user) => {
      if (error) {
        return "Unable to find query";
      }
      console.log(user);
    });
    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, data) => {
        if (error) {
          return error;
        }
        console.log(data);
      });

    db.collection("users")
      .find({ age: 21 })
      .count((error, count) => {
        if (error) {
          return error;
        }
        console.log(count);
      });
  }
);
