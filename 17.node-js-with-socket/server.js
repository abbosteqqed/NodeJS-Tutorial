const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

app.use(express.static("public"));

const users = new Set();

io.on("connection", (socket) => {
	console.log("A user is now connected");

	// Handle user when join
	socket.on("join", (userName) => {
		users.add(userName);

		io.emit("userJoined", userName);

		io.emit("usersList", Array.from(users));
	});

	// Handle incoming chats
	socket.on("chatMessage", (data) => {
		io.emit("chatMessage", data);
	});

	// Handle user disconnection
});

const PORT = 3000;

server.listen(PORT, () => {
	console.log("Server is running");
});
