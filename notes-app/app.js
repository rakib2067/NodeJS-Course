const validator = require("validator");
const chalk = require("chalk").default;
const getNotes = require("./notes");

console.log(getNotes());

console.log(validator.isEmail("Hello@gogle.com"));

console.log(validator.isURL("www.hello.com"));

console.log(chalk.green("Success!"));
console.log(chalk.blue.bold.inverse("Error"));
