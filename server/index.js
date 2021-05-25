const express = require('express')
const app = express()
const httpServer = require('http').createServer(app)

const options = { cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST'] } }
const io = require('socket.io')(httpServer, options)

const port = 3001

io.on('connection', (socket) => {
  console.log(socket.id)
})

httpServer.listen(port)
