const validator = require("validator");
const chalk = require("chalk").default;
const getNotes = require("./notes");

console.log(getNotes());

console.log(validator.isEmail("Hello@gogle.com"));

console.log(validator.isURL("www.hello.com"));

console.log(chalk.green("Success!"));

const input = process.argv[2];

if (input) {
  if (input.toLowerCase() === "test") {
    console.log(
      chalk.green.inverse("Congratulations, Your test was succesful")
    );
  } else if (input.toLowerCase() === "bad") {
    console.log(chalk.red.inverse("Error your input is Invalid!"));
  }
}
