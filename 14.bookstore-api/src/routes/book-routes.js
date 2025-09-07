const express = require("express");
const booksController = require("../controllers/books-controller");

const router = express.Router();

router.get("/get", booksController.getAllBooks);
router.get("/get/:id", booksController.getSingleBookById);
router.post("/add", booksController.addNewBook);
router.put("/update/:id", booksController.updateBook);
router.delete("/delete/:id", booksController.deleteBook);

module.exports = router;
