const express = require("express");
const QuestionController = express.Router();
const QuestionService = require("../Database/Data-services/QuestionService");

QuestionController.get("/", (req, res) => {
    res.json({ message: "haha" });
});

QuestionController.get("/books/:id", async (req, res) => {
    const questionQuerr = await QuestionService.GetRandBooksByEraId(req.params.id);

    res.json(questionQuerr);
});

module.exports = QuestionController;