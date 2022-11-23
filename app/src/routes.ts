import { Router } from "express";
import { booksRouter} from "./modules/books/booksRouter"
import { authorsRouter } from "./modules/authors/authorsRouter"
import { illustratorRouter } from "./modules/illustrators/illustratorsRouter";
import { genresRouter } from "./modules/genres/genreRouter";
import { publisherRouter } from "./modules/publishers/publisherRouter";

const router = Router();

router.get("/", (req, res) => res.send("Hello World!!!"));
router.use("/books", booksRouter);
router.use("/authors", authorsRouter );
router.use("/illustrators", illustratorRouter);
router.use("/genres", genresRouter);
router.use("/publishers", publisherRouter);

export { router };
