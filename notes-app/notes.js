const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => "Your notes...";

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicates = notes.filter((item) => item.title === title);
  if (duplicates.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
  } else {
    console.error(chalk.red.inverse("ERROR: There are duplicates"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((item) => item.title !== title);
  if (newNotes.length === notes.length) {
    console.log(chalk.red.inverse("No note found!"));
  } else {
    console.log(chalk.green.inverse("Note succesfully removed!"));
    saveNotes(newNotes);
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const buffer = fs.readFileSync("notes.json").toString();
    return JSON.parse(buffer);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote,
};
