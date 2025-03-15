const os = require('os');
const fileReader = require('./src/fileReader');
const dataProcessor = require('./src/dataProcessor');

const filePath = process.argv[2];

if (!filePath) {
    console.error("Error: Please provide a file path.");
    process.exit(1);
}

console.log(`Operating System: ${os.type()}`);

fileReader(filePath)
    .then(content => {
        const analysis = dataProcessor(content);
        console.log("Analysis Summary:");
        console.log(`- Total number of words: ${analysis.totalWords}`);
        console.log("- Word Frequencies:");
        Object.entries(analysis.wordFrequencies).forEach(([word, count]) => {
            console.log(`  - ${word}: ${count}`);
        });
    })
    .catch(error => {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    });
