import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @Input() scrollY: number;

  constructor(public el:ElementRef, public renderer: Renderer2) {
    console.log(this.scrollY + "hello");
  }
  @HostListener('window:scroll') scrolling2() {
    console.log(window.pageYOffset);
    if(window.pageYOffset > 100) {
      this.renderer.setStyle(this.el.nativeElement, 'display', "block");
    } else if(window.pageYOffset <= 100) {
      this.renderer.setStyle(this.el.nativeElement, 'display', "none");
    }
  }   

  @HostListener('click') goTop() {
    window.scroll({top:0, left:0, behavior:'smooth'})
  }

}
