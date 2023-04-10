import {Request, Response} from "express";
import {todoStore} from "../services/todo-store";

export class IndexController {
    index(req: Request, res: Response) {
        todoStore.all()
            .sort({[req.settings.orderBy]: req.settings.orderDirection ? 1 : -1})
            .then(todos => {
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

    orderBy(req: Request, res: Response) {
        req.settings.orderBy = req.body.order;
        req.settings.orderDirection = !req.settings.orderDirection;
        res.redirect("/");
    }
}

export const indexController = new IndexController();
