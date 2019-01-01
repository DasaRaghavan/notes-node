console.log('Starting notes.js');
const fs = require('fs');

let fetchAllNotes = () => {
  try {
    // read existing notes file
    let notesData = fs.readFileSync('notes-data.txt')
    return JSON.parse(notesData);
  } catch(e) {
      return [];
  }
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.txt', JSON.stringify(notes));
}

let addNote = (title, body) => {
  console.log('Adding note', title, body)
  let notes = fetchAllNotes();
  let note = {
    title,
    body
  };
//write to file only if it is not a duplicate title
  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

let listNotes = () => {
  console.log('listing all notes');
  return(fetchAllNotes());
}

let readNote = (title) => {
  console.log('Fetching note:', title);
  return fetchAllNotes().filter((note) => note.title === title);
}

let removeNote = (title) => {
  console.log('Removing note:', title);
  let note = fetchAllNotes().filter((note) => note.title === title);
  let notes = fetchAllNotes().filter((note) => note.title != title);
  saveNotes(notes);
  return note;
}

module.exports = {
  addNote,
  listNotes,
  readNote,
  removeNote
}
