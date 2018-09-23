const fs = require('fs');

let fetchNotes = () => {
    try {
      let noteString = fs.readFileSync('note-data.json');
      return JSON.parse(noteString);
    } catch (e) {
      return [];
    }
}

let saveNote = (note) => {
  fs.writeFileSync('note-data.json',JSON.stringify(note));
}

const addNote = (title, body) => {
  var note = fetchNotes();
  var notes = {
    title,
    body
  };

  let filteredNote = note.filter((note) => note.title === title);
  if (filteredNote.length === 0) {
    note.push(notes);
    saveNote(note);
    return note;
  }
}

const listNotes = () => {
  let notes = fetchNotes();
  return notes;
}

const readNote = (title) => {
  let notes = fetchNotes();
  let filteredNote = notes.filter((note) => note.title === title);
  return filteredNote;
}

const removeNote = (title) => {
  let notes = fetchNotes();
  let removeNote = notes.filter((note) => note.title !== title);
  saveNote(removeNote);
  return removeNote.length !== notes.length;
}


module.exports = {
  addNote,
  listNotes,
  readNote,
  removeNote
};
