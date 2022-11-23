"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _authorsController = require('./authorsController');

const authorsRouter = _express.Router.call(void 0, );

authorsRouter.get("/", _authorsController.AuthorsController.list);
authorsRouter.get("/:id", _authorsController.AuthorsController.searchById);
authorsRouter.post("/", _authorsController.AuthorsController.add);
authorsRouter.patch("/:id", _authorsController.AuthorsController.update);
authorsRouter.delete("/:id", _authorsController.AuthorsController.delete);


exports.authorsRouter = authorsRouter;