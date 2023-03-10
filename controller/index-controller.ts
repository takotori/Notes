import {Request, Response} from "express";

export class IndexController {
    index(req: Request, res: Response) {
        res.render("index", {
            dark: true,
            notes: [{name: "asdf"}, {name: "asdf2"}, {name: "asdf3"}],
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
