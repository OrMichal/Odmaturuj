const EraModel = require("../Models/Era");

const EraService = {
    async GetAllEras(){
        return await EraModel.find();
    },

    async GetEraById(id){
        return await EraModel.findOne({id: id});
    }
};

module.exports = EraService;