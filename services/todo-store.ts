import Datastore from 'nedb-promises'

const db = Datastore.create("./data/todo.db");


class Todo {
    constructor(
        public title: string,
        public importance: number,
        public dueDate: Date,
        public finished: boolean,
        public description: string,
        public createDate = Date.now()) {
    }
}

class TodoStore {

    insert(title: string,
           importance: number,
           dueDate: Date,
           finished: boolean,
           description: string) {
        return db.insert(new Todo(title, importance, dueDate, finished, description));
    }

    all() {
        return db.find({});
    }
}

export const todoStore = new TodoStore();
