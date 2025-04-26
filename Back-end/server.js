const express = require("express");
const cors = require("cors");
const mongo = require("mongoose");
const AuthorController = require("../Back-end/Controllers/AuthorController");
const BookController = require("./Controllers/BookController");
const EraController = require("./Controllers/EraController");

mongo.connect("mongodb://localhost:27017/dbOdmaturuj")
    .then(() => console.log("connected to mongo database"))
    .catch(err => console.error("error occured while connecting to mongo database: ", err));

const App = express();

App.use(cors());
App.use("/authors",AuthorController);
App.use("/books", BookController);
App.use("/eras", EraController);

App.listen(3000, () => console.log("hello on port: ", 3000));