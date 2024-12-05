// models/ChatRoom.js

const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
	chatRoomID: {type: String, require: true},
	chatMessages: { type: Array, required: true }
});

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;