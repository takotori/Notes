import {Request, Response} from "express";
import {todoStore} from "../services/todo-store";

export class TodoController {
    index(req: Request, res: Response) {
        res.render("todo");
    }

    save(req: Request, res: Response) {
        const todoItem = todoStore.insert(req.body.title,  req.body.importance, req.body.duedate, req.body.finished, req.body.description);
        res.redirect("/");
    }
}

export const todoController = new TodoController();
