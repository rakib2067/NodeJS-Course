const validator = require("validator");
const chalk = require("chalk").default;
const yargs = require("yargs");
const getNotes = require("./notes");

// console.log(yargs.argv);

yargs
  .command({
    command: "add",
    describe: "Add a new Note",
    handler: () => {
      console.log("Adding a new Note");
    },
  })
  .command({
    command: "remove",
    describe: "Remove a new Note",
    handler: () => {
      console.log("Removing a new Note");
    },
  }).argv;
