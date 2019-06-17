import{ Component, Output, EventEmitter } from "@angular/core";
@Component({
  selector : 'app-plus',
  template: `
    <button (click)="plus.emit()">+</button> 
  `,
  styles: [
  ]
})

export class PlusComponent {
  @Output() plus = new EventEmitter<void>();
}