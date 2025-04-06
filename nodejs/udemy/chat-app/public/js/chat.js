const socket = io()

socket.on('sendMessage', (message) => {
    console.log(message);
})

document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault()
    socket.emit('sendMessage', document.getElementById('message').value)
})