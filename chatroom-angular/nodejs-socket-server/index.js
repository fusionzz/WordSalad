const express = require('express');
const app = express();
const http = require('http');
const { disconnect } = require('process');
const server = http.createServer(app);
const {Server} = require("socket.io");


const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const chat = io.of("/chat")


app.get('/', (req, res) => {
  console.log("hello world")  
  res.send("hello world")
  });


chat.on('connection', (socket)=>{
    console.log('a user connected');
    console.log(chat.sockets)
    socket.on('message',(msg)=>{
        console.log('message : ' + msg);
        chat.emit('message', msg);
    })

    
    socket.on('disconnect',()=>{
    console.log('user disconnected')
    console.log(chat.sockets)
    })
})

server.listen(3000, () => {
  console.log('listening on *:3000');
});