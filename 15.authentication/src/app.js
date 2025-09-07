require("dotenv").config();
const connectDb = require("./database/db")

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
	await connectDb()
	console.log("Server is running.");
});
