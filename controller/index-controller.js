export class IndexController {
    index(req, res) {
        res.render("index", {dark: true, notes: [{name: "asdf"}, {name: "asdf2"},{name: "asdf3"},]});
    };

    async getNotes(req, res) {
        res.type('text/html');
        res.write("<html>");
        res.write("<p>no notes, git gud</p>");
        res.end("</html>");
    };
}

export const indexController = new IndexController();
