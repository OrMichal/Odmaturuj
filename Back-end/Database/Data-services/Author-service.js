const AuthorModel = require("../Models/Author");

const AuthorService = {
    async GetAuthorById(id){
        return await AuthorModel.findOne({id: id});
    },

    async GetAllAuthors(){
        return await AuthorModel.find();
    },

    async GetAuthorsByEraId(id){
        return await AuthorModel.find({era_ids: parseInt(id)});
    },

    async GetAuthorsByLiteratureMovementId(id){
        return await AuthorModel.find({literature_movemet_ids: parseInt(id)});
    }
};

module.exports = AuthorService;