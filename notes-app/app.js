const validator = require("validator");
const chalk = require("chalk").default;
const yargs = require("yargs");
const { getNotes, addNote, removeNote } = require("./notes");

yargs
  .command({
    command: "add",
    describe: "Add a new Note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note Body",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      addNote(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Remove a new Note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      console.log("Removing a new Note");
      removeNote(argv.title);
    },
  })
  .command({
    command: "list",
    describe: "List your notes",
    handler: function () {
      console.log("Listing out all notes");
    },
  })
  .command({
    command: "read",
    describe: "Read a note",
    handler: function () {
      console.log("Reading note 1...");
    },
  }).argv;
