const BookModel = require("../Models/Book");
const AuthorModel = require("../Models/Author");
const EraModel = require("../Models/Era");

const AnswerService = {
    async BookAuthorCheck(authorId, bookId){
        const BookQuerr = await BookModel.findOne({ id: parseInt(bookId) });
        return BookQuerr.author_ids.includes(parseInt(authorId));
    }
};

module.exports = AnswerService;