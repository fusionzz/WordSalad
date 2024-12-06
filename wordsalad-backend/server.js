// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const ChatMessage = require("./models/ChatMessage");
const ChatRoom = require("./models/ChatRoom");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection

mongoose.connect("mongodb://0.0.0.0:27017", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});


// Routes
app.get("/messages", async (req, res) => {
	try {
		const messages = await ChatMessage.find();
		res.json(messages);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.get("/chatroom/:chatRoomID", async (req, res) => {
	try {
		const chatRoom = await ChatRoom.findOne({'crID': req.params['chatRoomID']});
        if (chatRoom != null){
            messages = chatRoom.chatMessages;
        }
        else {
            messages = [];
        }
		res.json(messages);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.post("/messages", async (req, res) => {
	try {
		const { user, message } = req.body;

		if (!user || !message) {
			return res
				.status(400)
				.json({ error: "User and message are required" });
		}

		const chatMessage = new ChatMessage({
			user,
			message,
		});

		await chatMessage.save();

		res.status(201).json(chatMessage);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.post("/chatroom/:chatRoomID", async (req, res) => {
	try {
		const { user, message } = req.body;

		if (!user || !message) {
			return res
				.status(400)
				.json({ error: "User and message are required" });
		}

		const chatMessage = new ChatMessage({
			user,
			message,
		});
        
        chatRoom = await ChatRoom.findOne({'crID': req.params['chatRoomID']});
        if (chatRoom == null){
            crID = req.params['chatRoomID'];
            cms = [];
            chatRoom = new ChatRoom({
                crID,
                cms,
            });
        }
        chatRoom.chatMessages.push(chatMessage)

		await chatRoom.save();

		res.status(201).json(chatMessage);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});