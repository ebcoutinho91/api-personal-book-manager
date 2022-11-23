import { PublisherBusiness } from "./publisherBusiness";
import { Request, Response } from "express";

class PublisherController {

    static add = (req: Request, res: Response) => {
        const book = req.body;
        PublisherBusiness.toAdd(book)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static listAll = (req: Request, res: Response) => {
        PublisherBusiness.toListAll()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));        
    }

    static searchById = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        PublisherBusiness.toSearchById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    
    static update = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const genre = req.body;
        PublisherBusiness.toUpdate(genre, id)
            .then(results => {
                const responseObject = { "SQLResponse": results, "update": { ...genre, id } };
                return responseObject;
            })
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static delete = (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        PublisherBusiness.toDelete(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

}

export { PublisherController };