const express = require("express");
const AuthorController = express.Router();
const AuthorService = require("../Database/Data-services/Author-service");
const BookService = require("../Database/Data-services/Book-service");

AuthorController.get("/", async (req, res) => {
    try {
        const authorsQuerr = await AuthorService.GetAllAuthors();
    
        res.json(authorsQuerr);
    } catch (err) {
        res.status(500).json({ message: "Could not find any authors" });
        console.error("error with getting all aouthors: ", err);
    }
});

AuthorController.get("/:id", async (req, res) => {
    try {
        const authorQuerr = await AuthorService.GetAuthorById(req.params.id);
        
        res.json(authorQuerr);
    } catch (err) {
        res.status(500).json({ message: "Could not find this author" });
        console.error("error with getting single author: ", err);
    }
});

AuthorController.get("/era/:id", async (req, res) => {
    const authorsQuerr = await AuthorService.GetAuthorsByEraId(req.params.id);

    res.json(authorsQuerr);
});

AuthorController.get("/book/:id", async (req, res) => {
    const authorsQuerr = await BookService.GetAuthorByBookId(req.params.id);

    res.json(authorsQuerr);
});

module.exports = AuthorController;