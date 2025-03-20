const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command: 'add',
    description: 'add new note',
    builder: {
        title: {
            description: 'title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    description: 'remove note by title',
    builder: {
        title: {
            description: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    description: 'list of notes',
    handler: function(){
        notes.list()
    }
});

yargs.command({
    command: 'read',
    description: 'read note',
    builder: {
        title: {
            description: 'title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.read(argv.title)
    }
});

yargs.parse();