import {Request, Response} from "express";
import {todoStore} from "../services/todo-store";

export class IndexController {
    index(req: Request, res: Response) {
        todoStore.all().then(todos => {
            res.render("index", {
                dark: req.settings.theme,
                notes: todos,
            });
        });
    }

    toggleTheme(req: Request, res: Response) {
        req.settings.theme = !req.settings.theme;
        res.redirect("/");
    }
}

export const indexController = new IndexController();
