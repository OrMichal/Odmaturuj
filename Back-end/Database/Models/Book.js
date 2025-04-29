const mongo = require("mongoose");

const bookSchema = new mongo.Schema({
    id: Number,
    bookname: String,
    author_ids: Array,
    release_year: String,
    type: String,
    motive: String,
    era_id: Number
}, "books");

const book = mongo.model("book", bookSchema);

module.exports = book;