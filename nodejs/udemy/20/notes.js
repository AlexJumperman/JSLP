const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString());
    }catch (e){
        return [];
    }
}

const addNote = function(title, body){
    const notes = getNotes();

    if(notes.filter(note => note.title === title).length !== 0){
        return;
    }

    notes.push({title, body});
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const removeNote = function(title){
    const notes = getNotes();
    const newNotes = notes.filter(note => note.title !== title);
    if(notes.length === newNotes.length){
        console.log(chalk.bgRed('No note found!'));
        return;
    }
    fs.writeFileSync('notes.json', JSON.stringify(newNotes));
    console.log(chalk.bgGreen('Note removed!'));
}

const list = function(){
    console.log(chalk.green('Your notes:'))
    const notes = getNotes();
    notes.forEach((note) => {console.log(chalk.green(note.title))})
}

const read = function(title){
    const notes = getNotes();
    const note = notes.find(note => note.title === title);
    if(note){
        console.log(`${chalk.bgGreen(note.title)} ${note.body}`)
    }else{
        console.log(chalk.bgRed('No note found'));
    }
}

module.exports = {addNote, removeNote, list, read}