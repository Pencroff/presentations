/**
 * Created by pencr on 03-Aug-15.
 */
'use strict';
import {default as ng} from 'angular2/angular2';

const Component = ng.Component;
const View = ng.View;
const NgFor = ng.NgFor;
const NgIf = ng.NgIf;
const NgModel = ng.NgModel;
const EventEmitter = ng.EventEmitter;

import TodoItem from './todo-item'
import TodoStore from '../store'

//create a simple angular component
@Component({
    selector: 'todo-list',
    properties: ['list']
})
@View({
    templateUrl: 'src/components/todo-list.template.html',
    directives: [NgFor, NgIf, NgModel, TodoItem]
})
class TodoList {
    constructor(store){
        const me = this;
        me.store = store;
        me.list = store.list;
        me.filterItems('all');
        me.updateActiveItemsLabel();
        console.log('Todo List', store);
    }

    updateActiveItemsLabel() {
        const me = this,
            len = me.store.getActiveLen();
        console.log('updateActiveItemsLabel');
        me.activeItemsLeft = len;
        if (len === 1) {
            me.itemStr = 'item';
        } else {
            me.itemStr = 'items';
        }
    }

    addNewItem($event) {
        if($event.which === 13) { // ENTER_KEY
            let control = $event.target;
            this.store.addItem(control.value);
            control.value = '';
            console.log('Todo List Store', this.store);
            this.updateActiveItemsLabel();
        }
    }

    onCompleteItem($event) {
        console.log('onCompleteItem', $event);
        this.updateActiveItemsLabel();
    }

    onDestroyItem($event) {
        console.log('onDestroyItem', $event);
        this.store.removeItem($event.item);
        this.updateActiveItemsLabel();
    }

    toggleAllItems($event) {
        console.log('toggleAllItems', $event);
        this.store.toggleItems($event.target.checked);
        this.updateActiveItemsLabel();
    }

    isAllCompleted() {
        const me = this,
            activeLen = me.store.getActiveLen();
        return activeLen === 0;
    }

    filterItems(newFilter) {
        const me = this;
        me.filter = newFilter;
        switch (newFilter) {
        case 'completed':
            me.store.getFilterCompleted();
            break;
        case 'active':
            me.store.getFilterActive();
            break;
        default:
            me.store.getFilterAll();
        }
    }
    hasCompleted() {
        const me = this,
            allLen = me.store.list.length,
            activeLen = me.store.getActiveLen();
        return allLen !== activeLen;
    }
    clearCompleted() {
        this.store.clearCompletedItems();
    }
}
TodoList.parameters = [[TodoStore]];

export default TodoList