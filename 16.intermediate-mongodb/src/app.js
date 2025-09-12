require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const productRoute = require("./routes/product-route");

const app = express();
app.use(express.json());
app.use("/api/products", productRoute);

app.listen(3000, async () => {
	await connectToDB();
});
