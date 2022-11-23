"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _booksController = require('./booksController');

const booksRouter = _express.Router.call(void 0, );
booksRouter.get("/", _booksController.BooksController.listAll);
booksRouter.get("/book-type", _booksController.BooksController.listBooks);
booksRouter.get("/comic-type", _booksController.BooksController.listComics);
booksRouter.get("/by-author", _booksController.BooksController.listByAuthor);
booksRouter.get("/by-illustrator", _booksController.BooksController.listByIllustrator);
booksRouter.get("/:id", _booksController.BooksController.searchById);
booksRouter.post("/", _booksController.BooksController.add);
booksRouter.patch("/:id", _booksController.BooksController.update);
booksRouter.delete("/:id", _booksController.BooksController.delete);

exports.booksRouter = booksRouter;
