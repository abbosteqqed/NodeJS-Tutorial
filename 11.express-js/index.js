const express = require("express");
const middlewares = require("./middleware");

const app = express();

app.use(express.json());
app.use(middlewares.myMiddleware);

app.get("/", (req, res) => {
	res.json({
		message: "Success",
	});
});

app.get("/products", (req, res) => {
	const products = [
		{
			id: 1,
			name: "Product 1",
		},
		{
			id: 2,
			name: "Product 2",
		},
	];

	res.status(200).json(products);
});

app.listen(3000, () => {
	console.log("Server is running ");
});
