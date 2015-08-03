/**
 * Created by pencr on 02-Aug-15.
 */

//import deps
import 'zone.js';
import 'reflect-metadata';
//you may need es6-shim if you get an error relating to list.fill
import 'es6-shim';

//import {
//    Component,
//    View,
//    bootstrap
//} from 'angular2/angular2';

import {default as ng} from 'angular2/angular2';
console.dir(ng);

const Component = ng.Component;
const View = ng.View;
const Inject = ng.Inject;
const bind = ng.bind;
const bootstrap = ng.bootstrap;

import TodoItem from './components/todo-item'
import TodoList from './components/todo-list'
import TodoModel from './model'
import TodoStore from './store'

//create a simple angular component
@Component({
    selector: 'main-app'
})
@View({
    templateUrl: 'src/main.template.html',
    directives: [TodoList]
})
class MainApp {
    constructor(){
    }
}


//start our app
bootstrap(MainApp, [
    TodoModel,
    TodoStore,
    TodoList,
    TodoModel
]).then(function (ref) {
    console.log('Ref', ref);
});