"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _genresController = require('./genresController');

const genresRouter = _express.Router.call(void 0, );

genresRouter.post("/", _genresController.GenresController.add);
genresRouter.get("/", _genresController.GenresController.listAll);
genresRouter.get("/:id", _genresController.GenresController.searchById);
genresRouter.patch("/:id", _genresController.GenresController.update);
genresRouter.delete("/:id", _genresController.GenresController.delete);

exports.genresRouter = genresRouter;