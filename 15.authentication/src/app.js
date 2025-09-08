require("dotenv").config();
const connectDb = require("./database/db");
const authRoutes = require("./routes/auth-routes");
const homeRoutes = require("./routes/home-routes");

const express = require("express");

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/", homeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
	await connectDb();
	console.log("Server is running.");
});
