const BookModel = require("../Models/Book");
const AuthorModel = require("../Models/Author");

const BookService = {
    async GetBookById(id){
        return await BookModel.findOne({id: parseInt(id)});
    },

    async GetAllBooks(){
        return await BookModel.find();
    },

    async GetBooksByAuthorId(id){
        return await BookModel.find({author_ids: parseInt(id)});
    },

    async GetAuthorByBookId(id){
        const book = await BookModel.findOne({id: parseInt(id)});
        return await AuthorModel.find({id: book.author_ids});
    }
};

module.exports = BookService;