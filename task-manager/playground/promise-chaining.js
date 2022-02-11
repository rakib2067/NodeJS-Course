require("../src/db/mongoose");
const User = require("../src/models/user");

// 61ffe40e24e93be8bcb20f16
User.findByIdAndUpdate("61ffe40e24e93be8bcb20f16", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 21 });
  })
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
