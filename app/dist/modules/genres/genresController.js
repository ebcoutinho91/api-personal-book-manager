"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _genreBusiness = require('./genreBusiness');


class GenresController {

    static __initStatic() {this.add = (req, res) => {
        const book = req.body;
        _genreBusiness.GenreBusiness.toAdd(book)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    static __initStatic2() {this.listAll = (req, res) => {
        _genreBusiness.GenreBusiness.toListAll()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));        
    }}

    static __initStatic3() {this.searchById = (req, res) => {
        const id = parseInt(req.params.id);
        _genreBusiness.GenreBusiness.toSearchById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    
    static __initStatic4() {this.update = (req, res) => {
        const id = parseInt(req.params.id);
        const genre = req.body;
        _genreBusiness.GenreBusiness.toUpdate(genre, id)
            .then(results => {
                const responseObject = { "SQLResponse": results, "update": { ...genre, id } };
                return responseObject;
            })
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    static __initStatic5() {this.delete = (req, res) => {
        const id = parseInt(req.params.id);
        _genreBusiness.GenreBusiness.toDelete(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

} GenresController.__initStatic(); GenresController.__initStatic2(); GenresController.__initStatic3(); GenresController.__initStatic4(); GenresController.__initStatic5();

exports.GenresController = GenresController;