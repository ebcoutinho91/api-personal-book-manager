"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _illustratorsController = require('./illustratorsController');

const illustratorRouter = _express.Router.call(void 0, );

illustratorRouter.get("/", _illustratorsController.IllustratorsController.list);
illustratorRouter.get("/:id", _illustratorsController.IllustratorsController.searchById);
illustratorRouter.post("/", _illustratorsController.IllustratorsController.add);
illustratorRouter.patch("/:id", _illustratorsController.IllustratorsController.update);
illustratorRouter.delete("/:id", _illustratorsController.IllustratorsController.delete);


exports.illustratorRouter = illustratorRouter;