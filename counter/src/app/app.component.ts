import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-counter></app-counter>
  `,
  styles: []
})
export class AppComponent {
  num:number = 0;
  title = 'counter';
}
