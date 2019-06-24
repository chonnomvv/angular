import { Component, Input } from '@angular/core';
import { ITodo } from '../i-todo';
import { NavItem } from '../nav-item.type';

@Component({
  selector: 'app-todo-container',
  template: `
  <div class="container">
    <h1 class="title">Todos</h1>
    <div class="ver">Angular Version-5</div>
    <app-todo-form (addTodo)="addTodos($event)"></app-todo-form>
    <app-todo-nav [navState]="navState" [navItems]="navItems" (navStateChange)="navState = $event"></app-todo-nav>
    <app-todo-list [todos]="todos" [navState]="navState" (removeTodo)="removeTodos($event)" (toggleTodo)="toggleTodos($event)"></app-todo-list>
    <app-todo-footer [todos]="todos" (clearCompleted)="clearCompletedTodos()" (toggleAll)="toggleAllTodos()"></app-todo-footer>
  </div>
  <pre>{{todos | json}}</pre>
  `,
  styles: []
})
export class TodoContainerComponent {

  @Input() addTodo:string;
  @Input() removeTodo:number;
  @Input() toggleTodo:number;
  @Input() clearCompleted:Event;
  @Input() toggleAll:Event;

  constructor() {
    this.getTodos();
   }
  todos: ITodo[];

  navItems:NavItem[] = ['All', 'Active', 'Completed'];
  navState:NavItem = 'All';

  getTodos(){
    setTimeout(() => {
      this.todos = [
        { id: 1, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'Javascript', completed: false }
      ];
    }, 1000);
  }

  addTodos(content: string) {
    this.todos = [...this.todos, {id: this.getId(), content , completed: false}]
  }

  getId():number {
    return this.todos ? Math.max( ...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  removeTodos(id:number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  
  toggleTodos(id:number) {
    this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
  }

  clearCompletedTodos() {
   this.todos = this.todos.filter(todo => !todo.completed);
  }

  toggleAllTodos() {
    this.todos = this.todos.map(todo => !todo.completed ? {...todo, completed: !todo.completed} : todo);
  }

}
