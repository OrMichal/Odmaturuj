const express = require("express");
const EraController = express.Router();
const EraService = require("../Database/Data-services/Era-service");

EraController.get("/", async (req, res) => {
    const erasQuerr = await EraService.GetAllEras();

    res.json(erasQuerr);
});

EraController.get("/:id", async (req, res) => {
    const eraQuerr = await EraService.GetEraById(req.params.id);

    res.json(eraQuerr);
});

module.exports = EraController;