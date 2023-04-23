import {Request, Response} from "express";
import {todoStore} from "../services/todo-store";

export class TodoController {
    index(req: Request, res: Response) {
        res.render("todo", {dark: req.settings.theme});
    }

    async save(req: Request, res: Response) {
        const todo = await todoStore.insert(req.body.title, req.body.importance, req.body.dueDate, req.body.finished, req.body.description);
        if (req.path.includes("/return")) {
            res.redirect("/");
        } else {
            res.render("todo", {data: todo});
        }
    }

    async edit(req: Request, res: Response) {
        const todo = await todoStore.get(req.params.id);
        res.render("todo", {data: todo, dark: req.settings.theme});
    }

    async update(req: Request, res: Response) {
        await todoStore.update(req.params.id, req.body.title, req.body.importance, req.body.dueDate, req.body.finished, req.body.description);
        if (req.path.includes("/return")) {
            res.redirect("/");
        } else {
            res.render("todo", {data: await todoStore.get(req.params.id)});
        }
    }
}

export const todoController = new TodoController();
