"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _illustratorsBusiness = require('./illustratorsBusiness');



class IllustratorsController {
    static list(req, res) {
        _illustratorsBusiness.IllustratorsBusiness.toList()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static add(req, res) {
        const illustrator = req.body;
        _illustratorsBusiness.IllustratorsBusiness.toAdd(illustrator)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static searchById(req, res ) {
        const id = parseInt(req.params.id);
        _illustratorsBusiness.IllustratorsBusiness.toSearchById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static update(req, res) {
        const illustrator  = req.body;
        const id = parseInt(req.params.id);
        _illustratorsBusiness.IllustratorsBusiness.toUpdate(illustrator, id)
            .then(results => {
                const responseObject = {"SQLREsponse": results, "update": {...illustrator, id} };
                return responseObject;
            })
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));    
    }

    static delete(req, res) {
        const id = parseInt(req.params.id);
        _illustratorsBusiness.IllustratorsBusiness.toDelete(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }
}

exports.IllustratorsController = IllustratorsController;