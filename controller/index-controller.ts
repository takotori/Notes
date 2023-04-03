import {Request, Response} from "express";
import {todoStore} from "../services/todo-store";

export class IndexController {
    index(req: Request, res: Response) {
        todoStore.all().then(a => {
            res.render("index", {
                dark: true,
                notes: a,
            });
        });
    }

    async getNotes(req: Request, res: Response) {
        res.type("text/html");
        res.write("<html>");
        res.write("<p>no notes, git gud</p>");
        res.end("</html>");
    }
}

export const indexController = new IndexController();
