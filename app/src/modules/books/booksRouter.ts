import { Router } from "express";
import { BooksController } from "./booksController";

const booksRouter = Router();
booksRouter.get("/", BooksController.listAll);
booksRouter.get("/book-type", BooksController.listBooks);
booksRouter.get("/comic-type", BooksController.listComics);
booksRouter.get("/by-author", BooksController.listByAuthor);
booksRouter.get("/by-illustrator", BooksController.listByIllustrator);
booksRouter.get("/:id", BooksController.searchById);
booksRouter.post("/", BooksController.add);
booksRouter.patch("/:id", BooksController.update);
booksRouter.delete("/:id", BooksController.delete);

export { booksRouter };
