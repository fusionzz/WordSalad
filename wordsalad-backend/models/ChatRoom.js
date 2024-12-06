// models/ChatRoom.js

const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
	crID: {type: String, require: true},
	chatMessages: { type: Array, required: true, default: [] }
});

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;