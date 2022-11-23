"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _publishersController = require('./publishersController');

const publisherRouter = _express.Router.call(void 0, );

publisherRouter.post("/", _publishersController.PublisherController.add);
publisherRouter.get("/", _publishersController.PublisherController.listAll);
publisherRouter.get("/:id", _publishersController.PublisherController.searchById);
publisherRouter.patch("/:id", _publishersController.PublisherController.update);
publisherRouter.delete("/:id", _publishersController.PublisherController.delete);

exports.publisherRouter = publisherRouter;