const yargs = require('yargs');

yargs.version('1.1.1');

yargs.command({
    command: 'list',
    description: 'list',
    handler: function(){
        console.log('list')
    }
});

yargs.command({
    command: 'read',
    description: 'read',
    builder: {
        id: {
            description: 'id of the read obj',
            demandOption: true,
            type: 'number'
        }
    },
    handler: function(argv){
        console.log(`My Object with id: ${argv.id}`)
    }
});

yargs.parse();