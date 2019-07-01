import { Component, Input } from '@angular/core';
import { ITodo } from '../i-todo';
import { NavItem } from '../nav-item.type';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-todo-container',
  template: `
  <div class="container">
    <h1 class="title">Todos</h1>
    <div class="ver">Angular Version-6</div>
    <app-todo-form (add)="addingTodo($event)"></app-todo-form>
    <app-todo-nav [navState]="navState" [navItems]="navItems" (navStateChange)="navState = $event"></app-todo-nav>
    <app-todo-list [todos]="todos" [navState]="navState" (removeTodo)="removeTodos($event)" (toggleTodo)="toggleTodos($event)"></app-todo-list>
    <app-todo-footer [todos]="todos" (clearCompleted)="clearCompletedTodos()" (toggleAll)="toggleAllTodos()"></app-todo-footer>
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

  constructor(private http: HttpClient) {
    this.getTodos();
   }
  todos: ITodo[];

  navItems:NavItem[] = ['All', 'Active', 'Completed'];
  navState:NavItem = 'All';

  url = 'http://localhost:4500/todos';
  removeUrl : string;

  getTodos(){  
    this.http.get<ITodo[]>(this.url)
      .subscribe(todos => this.todos = todos);
  }

  addingTodo(content:string){
    const payload = { id: this.getId(), content: content, completed: false };
    this.http.post<ITodo[]>(this.url, payload).subscribe(todo => this.todos = todo);
  }
  

  getId():number {
    return this.todos ? Math.max( ...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  removeTodos(id:number) {
    // this.todos = this.todos.filter(todo => todo.id !== id);
    const removeUrl = `${this.url}/${id}`;
    this.http.delete<ITodo[]>(removeUrl).subscribe(todo => this.todos = todo);
  }
  
  toggleTodos(id:number) {
    const removeUrl = `${this.url}/${id}`;
    const toggleCompleted = this.todos.find(todo => todo.id === id).completed
    this.http.patch<ITodo[]>(removeUrl, {completed: !toggleCompleted}).subscribe(todo => this.todos = todo);
  }

  clearCompletedTodos() {
  //  this.todos = this.todos.filter(todo => !todo.completed);
  // const url = `${this.todos}`
   this.http.delete<ITodo[]>(`${this.url}/completed`).subscribe(todo => this.todos = todo);
    // console.log(this.todos.filter(todo => todo.completed));
  }

  toggleAllTodos() {
    this.http.patch<ITodo[]>(this.url, {completed: true }).subscribe(todo => this.todos = todo);
  }

}
