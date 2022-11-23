"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _booksRouter = require('./modules/books/booksRouter');
var _authorsRouter = require('./modules/authors/authorsRouter');
var _illustratorsRouter = require('./modules/illustrators/illustratorsRouter');
var _genreRouter = require('./modules/genres/genreRouter');
var _publisherRouter = require('./modules/publishers/publisherRouter');

const router = _express.Router.call(void 0, );

router.get("/", (req, res) => res.send("Hello World!!!"));
router.use("/books", _booksRouter.booksRouter);
router.use("/authors", _authorsRouter.authorsRouter );
router.use("/illustrators", _illustratorsRouter.illustratorRouter);
router.use("/genres", _genreRouter.genresRouter);
router.use("/publishers", _publisherRouter.publisherRouter);

exports.router = router;
