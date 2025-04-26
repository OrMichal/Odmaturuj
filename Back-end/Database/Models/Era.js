const mongo = require("mongoose");

const eraSchema = new mongo.Schema({
    id: Number,
    name: String,
    description: String,
    start: String,
    end: String
}, "eras");

const era = mongo.model("era", eraSchema);

module.exports = era;