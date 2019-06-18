import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todos-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos; index as i">
        <input type="checkbox" [checked]="todo.completed" (click)="toggle(i)">
        {{todo.content}}
        <button (click)="deleteTodo(todo.id)">X</button>
      </li>
    </ul>
  `,
  styles: []
})
export class TodosListComponent {
  @Input() todos: Todo[];
  @Output() toggleTodo = new EventEmitter();
  @Output() delete = new EventEmitter();
 
  toggle(i:number) {
    this.toggleTodo.emit(i);
  }
  deleteTodo(i:number) {
    this.delete.emit(i);
  }

}
