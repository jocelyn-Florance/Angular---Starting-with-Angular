import {Directive, OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements  OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor: string;
  @HostBinding('style.font-size.px') size: number;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.myBackgroundColor = 'yellow';
    this.size = 30;

  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.myBackgroundColor = 'transparent';
    this.size = 40;
  }

}
