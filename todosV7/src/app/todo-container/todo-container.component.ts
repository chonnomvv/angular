import { Component, Input } from '@angular/core';
import { ITodo } from '../i-todo';
import { NavItem } from '../nav-item.type';
import { environment } from '../../environments/environment';
import { TodoService } from '../todo.service'


@Component({
  selector: 'app-todo-container',
  template: `
  <div class="container">
    <h1 class="title">Todos</h1>
    <div class="ver">Angular Version-7</div>
    <app-todo-form (add)="addingTodo($event)"></app-todo-form>
    <app-todo-nav [navState]="navState" [navItems]="navItems" (navStateChange)="navState = $event"></app-todo-nav>
    <app-todo-list [todos]="todos" [navState]="navState" (removeTodo)="removeTodos($event)" (toggleTodo)="toggleTodos($event)"></app-todo-list>
    <app-todo-footer [todos]="todos"  (clearCompleted)="clearCompletedTodos()" (toggleAll)="toggleAllTodos()"></app-todo-footer>
  </div>
  <pre>{{todos | json}}</pre>
  `,
  styles: []
})
export class TodoContainerComponent {
  @Input() add:Event;
  @Input() addTodo:string;
  @Input() removeTodo:number;
  @Input() toggleTodo:number;
  @Input() clearCompleted:Event;
  @Input() toggleAll:Event;

  constructor(private todoService: TodoService) {
    this.getTodos();
   }
  todos: ITodo[];

  navItems:NavItem[] = ['All', 'Active', 'Completed'];
  navState:NavItem = 'All';
  content: string
  url = environment.appUrl;
  removeUrl : string;

  getTodos(){  
    this.todoService.getAll().subscribe(todos => this.todos = todos);
  }

  addingTodo(content:string){

    const payload = { id: this.getId(), content: content, completed: false };
    this.todoService.create(payload).subscribe(todo => this.todos = todo);
  }
  
  getId():number {
    return this.todos ? Math.max( ...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  removeTodos(id:number) {
    this.todoService.delete(id).subscribe(todo => this.todos = todo);
  }
  
  toggleTodos(id:number) {
    const toggleCompleted = !this.todos.find(todo => todo.id === id).completed
   this.todoService.toggle(id, toggleCompleted).subscribe(todo => this.todos = todo);
  }

  clearCompletedTodos() {
   this.todoService.deleteAll().subscribe(todo => this.todos = todo);
  }

  toggleAllTodos() {
   this.todoService.toggleAll().subscribe(todo => this.todos = todo);
  }

}
