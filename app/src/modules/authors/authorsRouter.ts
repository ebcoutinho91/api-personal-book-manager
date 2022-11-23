import { Router } from "express";
import { AuthorsController } from "./authorsController"

const authorsRouter = Router();

authorsRouter.get("/", AuthorsController.list);
authorsRouter.get("/:id", AuthorsController.searchById);
authorsRouter.post("/", AuthorsController.add);
authorsRouter.patch("/:id", AuthorsController.update);
authorsRouter.delete("/:id", AuthorsController.delete);


export { authorsRouter };