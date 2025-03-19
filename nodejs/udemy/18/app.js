const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json').toString());
data.name = 'Alex';
data.age = 35;

fs.writeFileSync('data.json', JSON.stringify(data));