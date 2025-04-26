const express = require("express");
const BookController = express.Router();
const BookService = require("../Database/Data-services/Book-service");

BookController.get("/", async (req, res) => {
    const bookQuerr = await BookService.GetAllBooks();

    res.json(bookQuerr);
});

BookController.get("/:id", async (req, res) => {
    const bookQuerr = await BookService.GetBookById(req.params.id);

    res.json(bookQuerr);
});

BookController.get("/author/:id", async (req, res) => {
    const bookQuerr = await BookService.GetBooksByAuthorId(req.params.id);
    res.json(bookQuerr);
});

module.exports = BookController;