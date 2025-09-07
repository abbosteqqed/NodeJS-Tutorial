const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Book title is required."],
		trim: true,
		maxLength: [100, "Book title cannot be more than 100 characters."],
	},
	author: {
		type: String,
		required: [true, "Author is required."],
		trim: true,
		maxLength: [100, "Author cannot be more than 100 characters."],
	},
	year: {
		required: [true, "Published year is required"],
		type: Number,
		min: [1000, "Year must be at least 1000"],
		max: [new Date().getFullYear(), "Yearn cannot be in the future"],
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Book", bookSchema);
