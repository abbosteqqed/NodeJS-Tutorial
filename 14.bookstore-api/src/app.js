require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const bookRoutes = require("./routes/book-routes");

const app = express();

app.use(express.json());

app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
	await connectToDB();
	console.log(`Server is running on ${PORT}`);
});
