const fs = require('fs').promises;

async function fileReader(filePath) {
    return await fs.readFile(filePath, 'utf8');
}

module.exports = fileReader;
