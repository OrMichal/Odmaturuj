const mongo = require("mongoose");
const { default: Stringifier_ } = require("postcss/lib/stringifier");

const authorSchema = new mongo.Schema({
    id: Number,
    firstname: String,
    middlename: String,
    lastname: String,
    era_ids: Array,
    literature_movemet_ids: Array
}, "authors");

const author = mongo.model("author", authorSchema);

module.exports = author;