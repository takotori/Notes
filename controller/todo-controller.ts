import {Request, Response} from "express";
import {todoStore} from "../services/todo-store";

export class TodoController {
    index(req: Request, res: Response) {
        res.render("todo", { dark: req.settings.theme});
    }

    save(req: Request, res: Response) {
        todoStore.insert(req.body.title, req.body.importance, req.body.dueDate, req.body.finished, req.body.description).then(todo => {
            if (req.path.includes("/return")) {
                res.redirect("/");
            } else {
                res.render("todo", {data: todo});
            }
        });
    }

    edit(req: Request, res: Response) {
        todoStore.get(req.params.id).then(todo => {
            res.render("todo", {data: todo});
        });
    }

    update(req: Request, res: Response) {
        todoStore.update(req.params.id, req.body.title, req.body.importance, req.body.dueDate, req.body.finished, req.body.description).then(() => {
            if (req.path.includes("/return")) {
                res.redirect("/");
            } else {
                todoStore.get(req.params.id).then(todo => {
                    res.render("todo", {data: todo});
                })
            }
        })
    }
}

export const todoController = new TodoController();
