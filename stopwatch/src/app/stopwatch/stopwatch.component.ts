import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  template: `
    <div class="stop-watch">
      <div class="display">{{mStr}}:{{sStr}}:{{msStr}}</div>
      <button class="control" (click)="trigger(btn)" #btn>Start</button>
    </div>
  `,
  styles: []
})
export class StopwatchComponent{
  m:number = 0;
  s:number = 0;
  ms: number = 0;
  stopwatch = null;
  flag = false;
  msStr:string = '00';
  sStr:string = '00';
  mStr:string = '00';

  timer():void {
    this.ms++;

    if(this.ms > 99){
      this.s += 1;
      this.ms = 0;
    }
    if ( this.s > 59) {
      this.s = 0;
      this.m += 1;
    }
    // this.ms < 10 ? this.msStr = `0${this.ms}` : `${this.ms}`;
    // this.s < 10 ? this.sStr = `0${this.s}` : `${this.s}`;

    this.msStr = this.ms < 10 ? `0${this.ms}` : `${this.ms}`;
    this.sStr = this.s < 10 ? `0${this.s}` : `${this.s}`;


  }

  trigger(btn:HTMLButtonElement):void {
    if(!this.flag) {
      this.flag = !this.flag;
      this.stopwatch = setInterval(this.timer.bind(this), 10);
      btn.innerHTML = 'Stop';
    } else {
      this.flag = !this.flag;
      clearInterval(this.stopwatch);
      btn.innerHTML = 'Start';
    }
  }
}
