"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _publisherBusiness = require('./publisherBusiness');


class PublisherController {

    static __initStatic() {this.add = (req, res) => {
        const book = req.body;
        _publisherBusiness.PublisherBusiness.toAdd(book)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    static __initStatic2() {this.listAll = (req, res) => {
        _publisherBusiness.PublisherBusiness.toListAll()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));        
    }}

    static __initStatic3() {this.searchById = (req, res) => {
        const id = parseInt(req.params.id);
        _publisherBusiness.PublisherBusiness.toSearchById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    
    static __initStatic4() {this.update = (req, res) => {
        const id = parseInt(req.params.id);
        const genre = req.body;
        _publisherBusiness.PublisherBusiness.toUpdate(genre, id)
            .then(results => {
                const responseObject = { "SQLResponse": results, "update": { ...genre, id } };
                return responseObject;
            })
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    static __initStatic5() {this.delete = (req, res) => {
        const id = parseInt(req.params.id);
        _publisherBusiness.PublisherBusiness.toDelete(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

} PublisherController.__initStatic(); PublisherController.__initStatic2(); PublisherController.__initStatic3(); PublisherController.__initStatic4(); PublisherController.__initStatic5();

exports.PublisherController = PublisherController;