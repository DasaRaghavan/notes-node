console.log('Starting app.js');

const fs = require ('fs');
const os = require('os');

const notes = require('./notes.js')

console.log(notes.addNote());

console.log(notes.add(9, -2));


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
