const mongoose = require("mongoose");




const prodcutSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Product name is required."],
			trim: true,
		},
		price: {
			type: Number,
			required: [true, "Product price is required."],
			default: 0,
		},
		inStock: Boolean,
	},
	{ timestamps: true }
);

const Product = mongoose.model("Product", prodcutSchema);

module.exports = Product;
