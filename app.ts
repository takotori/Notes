import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import session from 'express-session';
import {indexRoutes} from './routes/index-routes';
import {todoRoutes} from './routes/todo-route';
import {helpers} from './utils/handlebar-util'

import {create} from 'express-handlebars';
import {sessionSettings, Settings} from "./utils/session-middleware.index";

declare module 'express-session' {
    interface SessionData {
        settings: Settings;
    }
}

declare global {
    namespace Express {
        interface Request {
            settings: Settings;
        }
    }
}

export const app = express();
const hbs = create({
    extname: '.hbs',
    defaultLayout: "default",
    helpers: {
        ...helpers
    }
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));

app.use(express.static(path.resolve('public')));
app.use(session({secret: 'casduichasidbnuwezrfinasdcvjkadfhsuilfuzihfioda', resave: false, saveUninitialized: true}));

app.use(sessionSettings)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/", indexRoutes);
app.use("/todo", todoRoutes);
