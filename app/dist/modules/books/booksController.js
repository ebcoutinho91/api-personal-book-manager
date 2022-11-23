"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _booksBusiness = require('./booksBusiness');


class BooksController {
    static __initStatic() {this.listAll = (req, res) => {
        _booksBusiness.BooksBusiness.toListAll()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));        
    }}

    static __initStatic2() {this.listComics = (req, res) => {
        _booksBusiness.BooksBusiness.toListComics()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));        
    }}

    static __initStatic3() {this.listBooks = (req, res) => {
        _booksBusiness.BooksBusiness.toListBooks()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));        
    }}


    static __initStatic4() {this.listByAuthor = (req, res) => {
        const authorId = parseInt(req.query.authorId );
        _booksBusiness.BooksBusiness.toListByAuthor(authorId)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    static __initStatic5() {this.listByIllustrator = (req, res) => {
        const illustratorId = parseInt(req.query.illustratorId );
        console.log(illustratorId);
        _booksBusiness.BooksBusiness.toListByIllustrator(illustratorId)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    static __initStatic6() {this.searchById = (req, res) => {
        const id = parseInt(req.params.id);
        _booksBusiness.BooksBusiness.toSearchById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    static __initStatic7() {this.add = (req, res) => {
        const book = req.body;
        _booksBusiness.BooksBusiness.toAdd(book)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    static __initStatic8() {this.update = (req, res) => {
        const id = parseInt(req.params.id);
        const book = req.body;
        _booksBusiness.BooksBusiness.toUpdate(book, id)
            .then(results => {
                const responseObject = { "SQLResponse": results, "update": { ...book, id } };
                return responseObject;
            })
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}

    static __initStatic9() {this.delete = (req, res) => {
        const id = parseInt(req.params.id);
        _booksBusiness.BooksBusiness.toDelete(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }}
} BooksController.__initStatic(); BooksController.__initStatic2(); BooksController.__initStatic3(); BooksController.__initStatic4(); BooksController.__initStatic5(); BooksController.__initStatic6(); BooksController.__initStatic7(); BooksController.__initStatic8(); BooksController.__initStatic9();

exports.BooksController = BooksController;