console.log('Starting app.js');

const fs = require ('fs');
const os = require('os');
const yargs = require ('yargs');
const _ = require('lodash');

const notes = require('./notes.js')


let argv = yargs.argv;
let command = argv._[0]

console.log('yargs:', argv);
console.log('Command:', command);
// console.log('Process:', process.argv)


if(command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (!_.isUndefined(note)) {
    console.log(`${JSON.stringify(note)} added`)
  } else {
    console.log(`Title ${note}. Duplicate found`);
  }

} else if(command === 'list') {
    console.log(notes.listNotes());

} else if(command === 'read') {
    let note = notes.readNote(argv.title);
    if (note.length != 0) {
      console.log(note);
    } else {
      console.log(`Note with title ${argv.title} not found`);
    }

} else if(command === 'remove') {
    let note = notes.removeNote(argv.title);
    if (note.length != 0) {
      console.log(`${JSON.stringify(note)} removed`)
    } else {
      console.log(`Note with title ${argv.title} not found`);
    }

} else {
    console.log('Command not recognized');
}





//
// console.log(notes.addNote());
//
// console.log(notes.add(9, -2));


// const userInfo = os.userInfo();
// let fileName = 'greetings.txt'

// console.log(userInfo.username);

// fs.appendFile(fileName, `Hello ${userInfo.username}`, (err) => {
//   if (err) {
//     console.log('Unable to append to file');
//   } else {
//     console.log(`"Hello ${userInfo.username}" written to ${fileName}`)
//   }
// })
