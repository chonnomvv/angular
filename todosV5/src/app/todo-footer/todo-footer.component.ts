import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { ITodo } from '../i-todo';

@Component({
  selector: 'app-todo-footer',
  template: `
  <div class="footer">
    <div class="complete-all" (click)="toggleAllTodo()">
      <input class="custom-checkbox" type="checkbox" id="ck-complete-all">
      <label for="ck-complete-all">Mark all as complete</label>
    </div>
    <div class="clear-completed">
      <button class="btn" (click)="clearCompletedTodo()" >Clear completed (<span class="completed-todos" >{{ClearCompletedCount}}</span>)</button>
      <strong class="active-todos"> {{ActiveCount}}</strong> items left
    </div>
  </div>
  `,
  styles: []
})
export class TodoFooterComponent {

  @Input() todos:ITodo[];
  @Output() clearCompleted = new EventEmitter();
  @Output() toggleAll = new EventEmitter();
  constructor() { }

  get ClearCompletedCount () {
    if(!this.todos) return;
    return this.todos.filter((todo) => todo.completed).length;
  }

  get ActiveCount() {
    if(!this.todos) return;
    return this.todos.filter((todo) => !todo.completed).length;
  }

  clearCompletedTodo() {
    this.clearCompleted.emit();
  }
  toggleAllTodo() {
    this.toggleAll.emit();
  }

}
