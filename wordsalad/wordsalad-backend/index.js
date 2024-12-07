const express = require('express');
const http = require('http');
const { disconnect } = require('process');
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
});

//Routes
//Route for making new room


//Route for joining existing room