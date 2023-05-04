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

    async insert(title: string,
                 importance: number,
                 dueDate: Date,
                 finished: boolean,
                 description: string) {
        return db.insert(new Todo(title, importance, dueDate, finished, description));
    }

    async all(orderBy: string, orderDirection: boolean, removeCompleted: boolean) {
        const query = removeCompleted ? {finished: {$exists: false}} : {};
        return db.find(query)
            .sort({[orderBy]: orderDirection ? 1 : -1});
    }

    async get(id: string) {
        return db.findOne({_id: id});
    }

    async update(id: string,
                 title: string,
                 importance: number,
                 dueDate: Date,
                 finished: boolean,
                 description: string) {
        return db.update({_id: id}, {
            $set: {
                title: title,
                importance: importance,
                dueDate: dueDate,
                finished: finished,
                description: description
            }
        });
    }
}

export const todoStore = new TodoStore();
