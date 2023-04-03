import {Request, Response} from "express";

export class TodoController {
    index(req: Request, res: Response) {
        res.render("todo");
    }
}

export const todoController = new TodoController();
