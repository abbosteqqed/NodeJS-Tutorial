const Product = require("../model/product-model");

const sampleProducts = [
	{ name: "Wireless Mouse", price: 25.99, inStock: true },
	{ name: "Mechanical Keyboard", price: 79.5, inStock: true },
	{ name: "HD Monitor 24 inch", price: 149.99, inStock: true },
	{ name: "USB-C Hub", price: 39.99, inStock: false },
	{ name: "Gaming Headset", price: 59.99, inStock: true },
	{ name: "External Hard Drive 1TB", price: 89.99, inStock: true },
	{ name: "Smartphone Stand", price: 15.0, inStock: true },
	{ name: "Webcam 1080p", price: 49.99, inStock: false },
	{ name: "Portable Speaker", price: 35.99, inStock: true },
	{ name: "LED Desk Lamp", price: 22.5, inStock: true },
];

const addProducts = async (req, res) => {
	try {
		const products = await Product.insertMany(sampleProducts);
		res.status(201).json({
			products,
		});
	} catch (e) {
		res.status(500).json({
			error: e,
		});
	}
};

const getProductStats = async (req, res) => {
	try {
		const products = await Product.aggregate([
			{
				$match: {
					inStock: true,
					price: {
						$gte: 50,
					},
				},
			},
		]);
		res.status(201).json({
			products,
		});
	} catch (e) {
		res.status(500).json({
			error: e,
		});
	}
};

module.exports = {
	addProducts,
    getProductStats,
};
