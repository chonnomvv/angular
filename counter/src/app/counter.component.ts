import{ Component } from "@angular/core";
@Component({
  selector : 'app-counter',
  template: `
    <div class = "container">
      <app-plus (plus)="plus()"></app-plus>
      <div class="counter">{{num}}</div>
      <app-minus (minus)="minus()"></app-minus>
    </div>
  `,
  styles: [
  ]
})

export class CounterComponent {
  num:number = 0;
  plus(num:number):void {
    this.num++;
  }
  minus(num:number):void {
    --this.num;
  }
}