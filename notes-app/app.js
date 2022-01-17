const validator = require("validator");
const chalk = require("chalk").default;
const yargs = require("yargs");
const {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
} = require("./notes");

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
      removeNote(argv.title);
    },
  })
  .command({
    command: "list",
    describe: "List your notes",
    handler: () => {
      listNotes();
    },
  })
  .command({
    command: "read",
    describe: "Read a note",
    builder: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      readNote(argv.title);
    },
  }).argv;
