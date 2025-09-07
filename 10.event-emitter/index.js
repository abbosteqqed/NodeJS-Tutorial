const EventEmitter = require("events");

const myFirstEventEmitter = new EventEmitter();

myFirstEventEmitter.on("greeting", (message) => {
	console.log(`Greeting message ${message}`);
});

myFirstEventEmitter.on("second", (a, b) => {
	console.log(`${a + b}`);
});

myFirstEventEmitter.emit("greeting", "Abbos");

myFirstEventEmitter.emit("second", 234, 256);
