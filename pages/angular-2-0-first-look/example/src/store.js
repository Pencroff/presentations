/**
 * Created by pencr on 02-Aug-15.
 */
'use strict';
import TodoModel from './model'

class TodoStore {
    constructor (model) {
        const me = this;
        me.list = [];
        me.model = model;
        console.log('Todo Store', model);
    }

    addItem(title) {
        const me = this,
            model = me.model,
            item = model.getInstance(title);
        me.list.push(item);
    }

    removeItem(item) {
        const me = this,
            index = me.list.indexOf(item);
        if (index > -1) {
            me.list.splice(index, 1);
        }
    }

    toggleItems(value) {
        for (let item of this.list) {
            item.completed = value;
        }
    }

    getActiveLen() {
        let len = 0;
        for (let item of this.list) {
            if (item.completed === false) {
                len += 1;
            }
        }
        return len;
    }

    getFilterCompleted() {
        this.updateFilter(function (item) {
            return item.completed === true;
        })
    }

    getFilterActive() {
        this.updateFilter(function (item) {
            return item.completed === false;
        })
    }

    getFilterAll() {
        this.updateFilter(function (item) {
            return true;
        })
    }

    updateFilter(fn) {
        for (let item of this.list) {
            if (fn(item)) {
                delete item.hidden;
            } else {
                item.hidden = true;
            }
        }
    }

    clearCompletedItems() {
        for (let item of this.list) {
            if (item.completed === true) {
                this.removeItem(item);
            }
        }
    }
}

TodoStore.parameters = [[TodoModel]];

export default TodoStore;