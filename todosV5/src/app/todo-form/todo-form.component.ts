import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  template: `
  <input class="input-todo" placeholder="What needs to be done?" autofocus (keyup.enter)="methodAddTodo(input)" #input>
  `,
  styles: []
})
export class TodoFormComponent {

  @Output() addTodo = new EventEmitter();

  constructor() { }

  methodAddTodo(content: HTMLInputElement) {
    if(!content.value.trim()) return;
    this.addTodo.emit(content.value);
    content.value = '';
  }
}
