import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../i-todo';
import { NavItem } from '../nav-item.type';

@Component({
  selector: 'app-todo-list',
  template: `
  <ul class="todos" *ngIf="todos; else loading">
      <li id="todo.id" class="todo-item" *ngFor="let todo of todos | todosFilter:navState " (click)="toggleTodos(todo.id)">
        <input class="custom-checkbox" type="checkbox" id="todo.id" [checked]="todo.completed" >
        <label for="ck-{{todo.id}}">{{todo.content}}</label>
        <i class="remove-todo far fa-times-circle" (click)="removes(todo.id)"></i>
      </li>
    </ul>
  <ng-template #loading><div class="spinner-container"><div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></ng-template>
    
  `,
  styles: [`.lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-spinner div {
    transform-origin: 32px 32px;
    animation: lds-spinner 1.2s linear infinite;
  }
  .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 29px;
    width: 5px;
    height: 14px;
    border-radius: 20%;
    background: black;
  }
  .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  .spinner-container {
    text-align: center;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  `]
})
export class TodoListComponent {

  @Input() todos:ITodo[];
  @Input() navState: NavItem;
  @Output() removeTodo = new EventEmitter();
  @Output() toggleTodo = new EventEmitter();
  
  constructor() { }

  toggleTodos(id:number) {
    this.toggleTodo.emit(id);
  }
  removes(id:number) {
    this.removeTodo.emit(id);
  }

}
