const validator = require("validator");
const chalk = require("chalk").default;
const yargs = require("yargs");
const getNotes = require("./notes");

yargs.command({
  command: "add",
  describe: "add a note to your notebook",
  handler: function () {
    console.log("Added note");
  },
});
