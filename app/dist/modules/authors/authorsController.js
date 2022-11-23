"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _authorsBusiness = require('./authorsBusiness');



class AuthorsController {
    static list(req, res) {
        _authorsBusiness.AuthorsBusiness.toList()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static add(req, res) {
        const author = req.body;
        _authorsBusiness.AuthorsBusiness.toAdd(author)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static searchById(req, res ) {
        const id = parseInt(req.params.id);
        _authorsBusiness.AuthorsBusiness.toSearchById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static update(req, res) {
        const author  = req.body;
        const id = parseInt(req.params.id);
        _authorsBusiness.AuthorsBusiness.toUpdate(author, id)
            .then(results =>{
                const responseObject = {"SQLREsponse": results, "update": {...author, id} };
                return responseObject;
            })
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));    
    }

    static delete(req, res) {
        const id = parseInt(req.params.id);
        _authorsBusiness.AuthorsBusiness.toDelete(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }
}

exports.AuthorsController = AuthorsController;