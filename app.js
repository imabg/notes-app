console.log('Welcome To Notes-App');

const os = require('os');
const fs = require('fs');
const notes = require('./notes.js')
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const arg = process.argv[2];

if (arg === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (_.isUndefined(note)) {
    console.log(`Title already Exists`);
  } else {
    console.log(`Note is created with having Title ${argv.title}`);
  }
} else if (arg === 'list') {
  let result = notes.listNotes();
  console.log(result);
} else if (arg === 'read') {
  let result = notes.readNote(argv.title);
  if (result.length === 0) {
    console.log(`No Note is There`);
  } else {
    console.log(result);
  }
} else if (arg === 'remove') {
  let note = notes.removeNote(argv.title);
  let msg = note ? 'Removed' : 'NOT Removed';
  console.log(msg);
} else {
  console.log('Command NOT recognized');
}
