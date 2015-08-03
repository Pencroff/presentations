/**
 * Created by pencr on 02-Aug-15.
 */
'use strict';
import {default as ng} from 'angular2/angular2';
const Injectable = ng.Injectable;

@Injectable('todo.Model')
class TodoModel {
    static getId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    constructor() {
        const me = this;

        let title = 'Todo::';

        me._id = TodoModel.getId();
        me.itemTitle = title + me._id;
        me.isCompleted = false;
    }

    getInstance(title) {
        let instance = new TodoModel();
        instance.title = title;
        return instance;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this.itemTitle;
    }
    set title(v) {
        this.itemTitle = v;
    }

    get completed() {
        return this.isCompleted;
    }
    set completed(v) {
        this.isCompleted = v;
    }
}

export default TodoModel;