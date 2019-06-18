import { Component,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-input',
  template: `
    <input type="text" placeholder="enter todo" (keyup.enter)="addTodo(input)" #input>
  `,
  styles: []
})
export class InputComponent {

  @Output() add = new EventEmitter();

  addTodo(input:HTMLInputElement) {
    if(!input.value.trim())  return;
    this.add.emit(input.value);
    input.value = '';
  }

}
