import { Component, OnInit } from '@angular/core';
// `translate3d(-50%, 0, 0) rotate(${h * 30}deg)`;
@Component({
  selector: 'app-analog-clock',
  template: `
  <div class="clock">
  <div class="analog-clock">
    <div class="hour hand" [ngStyle]="sDegree"></div>
    <div class="minute hand" [ngStyle]="mDegree"></div>
    <div class="second hand" [ngStyle]="hDegree"></div>
    <div class="center-circle"></div>
  </div>
  <div class="digital-clock">{{hStr}}:{{mStr}}:{{sStr}}</div>
</div>
  `,
  styles: []
})
export class AnalogClockComponent{
  date:Date;
  h:number;
  m:number;
  s:number;
  hDegree:object;
  mDegree:object;
  sDegree:object;
  hStr:string;
  mStr:string;
  sStr:string;
  constructor() {
    this.setTime();
  }

  getDate() {
    this.date = new Date();
    this.h = this.date.getHours();
    this.m = this.date.getMinutes();
    this.s = this.date.getSeconds();
    this.hStr = this.h < 10 ? `0${this.date.getHours()}` : `${this.date.getHours()}`;
    this.mStr = this.m < 10 ? `0${this.date.getMinutes()}` : `${this.date.getMinutes()}`;
    this.sStr = this.s < 10 ? `0${this.date.getSeconds()}` : `${this.date.getSeconds()}`;
    this.sDegree = { 'transform': `translate3d(-50%, 0, 0) rotate(${this.s * 6}deg)`};
    this.mDegree = { 'transform': `translate3d(-50%, 0, 0) rotate(${this.m * 6}deg)` };
    this.hDegree = { 'transform': `translate3d(-50%, 0, 0) rotate(${this.h * 30}deg)` };
  }

  setTime() {
    setInterval(this.getDate.bind(this), 1000);
  }

  

}
