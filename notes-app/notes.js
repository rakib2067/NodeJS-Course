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
};
