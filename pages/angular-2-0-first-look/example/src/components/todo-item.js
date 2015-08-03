/**
 * Created by pencr on 02-Aug-15.
 */

import {default as ng} from 'angular2/angular2';

const Component = ng.Component;
const View = ng.View;
const NgIf = ng.NgIf;
const bootstrap = ng.bootstrap;

const EventEmitter = ng.EventEmitter;

//create a simple angular component
@Component({
    selector: 'todo-item',
    properties: ['item'],
    events: ['complete', 'destroy']
})
@View({
    templateUrl: 'src/components/todo-item.template.html',
    directives: [NgIf]
})
class TodoItem {
    constructor(){
        this.complete = new EventEmitter();
        this.destroy = new EventEmitter();
    }
    onComplete($event) {
        const me = this;
        console.log('onComplete internal', $event);
        me.item.completed = !me.item.completed;
        me.complete.next({
            itemId: me.item.id
        });
    }
    onDestroy($event) {
        const me = this;
        console.log('onDestroy internal', $event);
        me.destroy.next({
            item: me.item
        });
    }
    editItem($event) {
        const me = this;
        console.log('editItem', $event);
        if (!me.item.isEditing) {
            me.item.isEditing = true;
        }
    }
    finishEditItem($event) {
        const me = this;
        console.log('finishEditItem', $event);
        if($event.which === 13) { // ENTER_KEY
            let control = $event.target;
            me.item.title = control.value;
            delete me.item.isEditing;
        }
    }
}

export default TodoItem;