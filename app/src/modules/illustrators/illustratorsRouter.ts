import { Router } from "express";
import { IllustratorsController } from "./illustratorsController";

const illustratorRouter = Router();

illustratorRouter.get("/", IllustratorsController.list);
illustratorRouter.get("/:id", IllustratorsController.searchById);
illustratorRouter.post("/", IllustratorsController.add);
illustratorRouter.patch("/:id", IllustratorsController.update);
illustratorRouter.delete("/:id", IllustratorsController.delete);


export { illustratorRouter };