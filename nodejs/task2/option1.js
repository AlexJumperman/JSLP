const fs = require('fs');
const crypto = require('crypto');

const file = fs.createWriteStream('output1.txt');
const targetSize = 1024 * 1024 * 1024; // 1GB
let writtenBytes = 0;
let rowCount = 0;

function randomId(length = 16) {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
}

function write() {
    let ok = true;
    while (writtenBytes < targetSize && ok) {
        const id = randomId(16);
        const line = id + '\n';
        writtenBytes += Buffer.byteLength(line);
        ok = file.write(line);
        rowCount++;
    }
    if (writtenBytes < targetSize) {
        file.once('drain', write);
    } else {
        file.end();
        console.log('File creation completed.', rowCount);
    }
}

write();
