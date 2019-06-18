import { Component, Input } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todos',
  template: `
    <app-input (add)="addTodo($event)" ></app-input>
    <app-todos-list [todos]="todos" (toggleTodo)="toggleTodos($event)" (delete)="deleteTodos($event)"></app-todos-list>
    <pre></pre>
  `,
  styles: []
})
export class TodosComponent {

  @Input() add:string;
  @Input() toggleTodo:number;
  @Input() deleteI:number;

  todos:Todo[] = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JavaScript', completed: false }
  ]

  addTodo(add:string) {
    console.log('hello');
    this.todos = [ ...this.todos, { id: this.getId(), content: add, completed: false }];

  }
  getId():number {
    return this.todos.length ? Math.max(...this.todos.map((todo) => todo.id)) + 1 : 1;
  }
  toggleTodos(toggleTodo:number) {
    this.todos = this.todos.map((todo, i) => toggleTodo === i ? {...todo, completed: !todo.completed}: todo);
  }

  deleteTodos(deleteI:number) {
    this.todos = this.todos.filter( (todo) => todo.id !== deleteI);
    console.log(this.todos);
  }

}
