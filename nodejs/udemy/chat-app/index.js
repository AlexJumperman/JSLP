const app = require('./src/app')
const http = require('http')
const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('sendMessage', (message) => {
        io.emit('sendMessage', message);
    })
    socket.on('sendLocation', (location, callback) => {
        io.emit('sendMessage', `https://google.com/maps?q=${location.latitude},${location.longitude}`);
        callback('Location sent')
    })
})

server.listen(3000, () => {
    console.log('App listening on port 3000');
})