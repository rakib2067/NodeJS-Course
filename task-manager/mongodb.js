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
    db.collection("users")
      .updateOne(
        {
          _id: new ObjectId("61f71e0710eb613e239918ee"),
        },
        {
          $set: {
            name: "Masuma",
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
);
