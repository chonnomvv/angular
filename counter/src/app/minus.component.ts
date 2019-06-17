import{ Component, Output, EventEmitter } from "@angular/core";
@Component({
  selector : 'app-minus',
  template: `
    <button (click)="minus.emit()">-</button> 
  `,
  styles: [
  ]
})

export class MinusComponent {
  @Output() minus = new EventEmitter<void>();
}