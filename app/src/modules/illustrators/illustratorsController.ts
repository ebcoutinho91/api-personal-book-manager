import { IllustratorsBusiness } from "./illustratorsBusiness";
import { Request, Response } from "express";
import { AddIllustratorDTO } from "./dtos/addIllustratorDTO";

class IllustratorsController {
    static list(req: Request, res: Response) {
        IllustratorsBusiness.toList()
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static add(req: Request, res: Response) {
        const illustrator: AddIllustratorDTO = req.body;
        IllustratorsBusiness.toAdd(illustrator)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static searchById(req: Request, res: Response ) {
        const id: number = parseInt(req.params.id);
        IllustratorsBusiness.toSearchById(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }

    static update(req: Request, res: Response) {
        const illustrator: AddIllustratorDTO  = req.body;
        const id: number = parseInt(req.params.id);
        IllustratorsBusiness.toUpdate(illustrator, id)
            .then(results => {
                const responseObject = {"SQLREsponse": results, "update": {...illustrator, id} };
                return responseObject;
            })
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));    
    }

    static delete(req: Request, res: Response) {
        const id: number = parseInt(req.params.id);
        IllustratorsBusiness.toDelete(id)
            .then(results => res.status(200).json(results))
            .catch(err => res.status(400).json(err));
    }
}

export { IllustratorsController }