const Books = require("../models/book");

// Get All Books
const getAllBooks = async (req, res) => {
	try {
		const books = await Books.find();
		res.status(200).json({
			data: books,
		});
	} catch (e) {
		res.status(500).json({
			error: e,
		});
	}
};

// Get Single Book Details
const getSingleBookById = async (req, res) => {
	try {
		const id = req.params.id;
		const book = await Books.findById(Object(id));

		if (!book) {
			res.status(404).json({
				error: true,
				message: "Book not found",
			});
		} else {
			res.status(200).json({
				data: book,
			});
		}
	} catch (e) {
		res.status(500).json({
			error: e,
		});
	}
};

// Add New Book
const addNewBook = async (req, res) => {
	try {
		const newBookData = req.body;
		const newBook = await Books.create({ ...newBookData });

		res.status(201).json({
			success: true,
			message: "Book added successfully.",
			data: newBook,
		});
	} catch (e) {
		res.status(500).json({
			error: e,
		});
	}
};

// Update Book Details
const updateBook = async (req, res) => {
	try {
		const id = req.params.id;
		const newBookData = req.body;
		const existingBook = await Books.findById(Object(id));
		if (!existingBook) {
			res.status(404).json({
				error: true,
				message: "Book not found",
			});
		}
		const newBook = await Books.updateOne(
			{ _id: Object(id) },
			{ ...newBookData }
		);

		res.status(201).json({
			success: true,
			message: "Book update successfully.",
		});
	} catch (e) {
		res.status(500).json({
			error: e,
		});
	}
};

const deleteBook = async (req, res) => {
	try {
		const id = req.params.id;
		const existingBook = await Books.findById(Object(id));
		if (!existingBook) {
			res.status(404).json({
				error: true,
				message: "Book not found",
			});
		} else {
			await Books.deleteOne({ _id: Object(id) });
			res.status(201).json({
				success: true,
				message: "Book deleted successfully.",
			});
		}
	} catch (e) {
		res.status(500).json({
			error: e,
		});
	}
};

module.exports = {
	getAllBooks,
	getSingleBookById,
	addNewBook,
	updateBook,
	deleteBook,
};
