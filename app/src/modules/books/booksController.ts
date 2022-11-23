import { BooksBusiness } from "./booksBusiness";
import { Request, Response } from "express";

class BooksController {
    static listAll = (req: Request, res: Response) => {
        BooksBusiness.toListAll()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));        
    }

    static listComics = (req: Request, res: Response) => {
        BooksBusiness.toListComics()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));        
    }

    static listBooks = (req: Request, res: Response) => {
        BooksBusiness.toListBooks()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));        
    }


    static listByAuthor = (req: Request, res: Response) => {
        const authorId = parseInt(req.query.authorId as string);
        BooksBusiness.toListByAuthor(authorId)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static listByIllustrator = (req: Request, res: Response) => {
        const illustratorId = parseInt(req.query.illustratorId as string);
        console.log(illustratorId);
        BooksBusiness.toListByIllustrator(illustratorId)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static searchById = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        BooksBusiness.toSearchById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static add = (req: Request, res: Response) => {
        const book = req.body;
        BooksBusiness.toAdd(book)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static update = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const book = req.body;
        BooksBusiness.toUpdate(book, id)
            .then(results => {
                const responseObject = { "SQLResponse": results, "update": { ...book, id } };
                return responseObject;
            })
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static delete = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        BooksBusiness.toDelete(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }
}

export { BooksController };