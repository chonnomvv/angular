import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  template: `
  <input class="input-todo" placeholder="What needs to be done?" autofocus [(ngModel)]="content" (keyup.enter)="addTodo()">
  `,
  styles: []
})
export class TodoFormComponent {

  content: string;
  // @Output() addTodo = new EventEmitter();
  @Output() add = new EventEmitter();

  constructor() { }

  addTodo() {
    const content = this.content.trim();
    this.content = '';
    if(!content) return;
    this.add.emit(content);
  }
  // methodAddTodo(content: HTMLInputElement) {
  //   if(!content.value.trim()) return;
  //   this.addTodo.emit(content.value);
  //   content.value = '';
  // }
}
