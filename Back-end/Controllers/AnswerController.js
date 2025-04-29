const express = require("express");
const AnswerController = express.Router();
const AnswerService = require("../Database/Data-services/Answer-service");

AnswerController.post("/bookcheck", async (req, res) => {
    const { authorId, bookId } = req.body;
    if(await AnswerService.BookAuthorCheck(authorId, bookId)){
        res.status(200).json({});
        return;
    }

    res.status(400).json({});
});

module.exports = AnswerController;