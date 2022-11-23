import { Router } from "express";
import { GenresController } from "./genresController";

const genresRouter = Router();

genresRouter.post("/", GenresController.add);
genresRouter.get("/", GenresController.listAll);
genresRouter.get("/:id", GenresController.searchById);
genresRouter.patch("/:id", GenresController.update);
genresRouter.delete("/:id", GenresController.delete);

export { genresRouter };