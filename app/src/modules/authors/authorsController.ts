import { AuthorsBusiness } from "./authorsBusiness";
import { Request, Response } from "express";
import { Author } from "./model/authorModel";

class AuthorsController {
    static list(req: Request, res: Response) {
        AuthorsBusiness.toList()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static add(req: Request, res: Response) {
        const author: Author = req.body;
        AuthorsBusiness.toAdd(author)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static searchById(req: Request, res: Response ) {
        const id: number = parseInt(req.params.id);
        AuthorsBusiness.toSearchById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static update(req: Request, res: Response) {
        const author: Author  = req.body;
        const id: number = parseInt(req.params.id);
        AuthorsBusiness.toUpdate(author, id)
            .then(results =>{
                const responseObject = {"SQLREsponse": results, "update": {...author, id} };
                return responseObject;
            })
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));    
    }

    static delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        AuthorsBusiness.toDelete(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }
}

export { AuthorsController }