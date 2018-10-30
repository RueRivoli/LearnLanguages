const express = require('express');

const app = express()

const server = app.listen(3001, function() {
    console.log('server running on port 3001')
})

app.get('/', function(req, res) {
    res.send('chat serveur')
})

function logData (message) {
    var d = new Date()
    var time = '[' + d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds() + ']'
    console.log(time + ' => ' + message)
}

logData('chat server has booted')
const io = require('socket.io')(server)

var clients = 0
io.on('connection', function(socket) {
    clients++
    socket.emit('CLIENTS', clients)
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        console.log('sendM')
        // io.emit('MESSAGE', data)
        socket.broadcast.emit('ALLMESSAGE', data)
    })
    socket.on('disconnect', function () {
        clients--;
        socket.broadcast.emit('CLIENTS', clients)
    })
})