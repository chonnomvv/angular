import { Component, Input, Output,EventEmitter } from '@angular/core';
import { NavItem } from '../nav-item.type';

@Component({
  selector: 'app-todo-nav',
  template: `
  <ul class="nav">
    <li *ngFor="let navItem of navItems" [class.active]="navState===navItem" (click)="navStateChange.emit(navItem)">{{navItem}}</li>
  </ul>
  `,
  styles: []
})
export class TodoNavComponent{
  
  @Input() navItems:NavItem[];
  @Input() navState:NavItem;
  @Output() navStateChange = new EventEmitter();

  constructor() { }
  // navStateChanges(navItem:NavItem) {
  //   this.navStateChange.emit(navItem);
  // }
}
