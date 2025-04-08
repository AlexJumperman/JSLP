const socket = io()

socket.on('sendMessage', (message) => {
    console.log(message);
})

document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault()
    socket.emit('sendMessage', document.getElementById('message').value)
})

document.getElementById('send-location').addEventListener('click', (e) => {
    if(!navigator.geolocation) {
        return alert('Geolocation is not supported');
    }

    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        socket.emit('sendLocation', { latitude, longitude }, (acknowledgment) => {
            console.log(acknowledgment)
        })
    })
})