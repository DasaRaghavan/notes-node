const fs = require('fs');

let originalNote = {
  title: 'My Book',
  body: 'My book of secrets'
}

// console.log(typeof originalNote);
let originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
console.log(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

let objectReadFromFile = JSON.parse(fs.readFileSync('notes.json'));
console.log(typeof objectReadFromFile);
console.log(objectReadFromFile);
