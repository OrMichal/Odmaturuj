const BookModel = require("../Models/Book");
const AuthorModel = require("../Models/Author");
const EraModel = require("../Models/Era");

const QuestionService = {
    async GetRandBooksByEraId(id) {
        const eraId = parseInt(id);
    
        const [author] = await AuthorModel.aggregate([{ $match: { era_ids: eraId } },{ $sample: { size: 1 } }]);
    
        const [correctBook] = await BookModel.aggregate([{ $match: { author_ids: author.id } },{ $sample: { size: 1 } }]);
    
        const randomBooks = await BookModel.aggregate([{$match: { era_id: eraId, _id: { $ne: correctBook._id } } }, { $sample: { size: 4 } }]);
    
        const books = [...randomBooks, correctBook];
    
        for (let i = books.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [books[i], books[j]] = [books[j], books[i]];
        }
    
        return { Author: [author], Books: books };
    }
    
};

module.exports = QuestionService;