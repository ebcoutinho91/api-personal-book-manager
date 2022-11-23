import { Router } from "express";
import { PublisherController } from "./publishersController";

const publisherRouter = Router();

publisherRouter.post("/", PublisherController.add);
publisherRouter.get("/", PublisherController.listAll);
publisherRouter.get("/:id", PublisherController.searchById);
publisherRouter.patch("/:id", PublisherController.update);
publisherRouter.delete("/:id", PublisherController.delete);

export { publisherRouter };