const express = require("express");
const AuthorController = express.Router();

router.get("/api/:id", (req, res) => res.json({id: req.params.id}));

export default AuthorController;