import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightedColor: string = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
      //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    this.backgroundColor  = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange');
    this.backgroundColor = this.highlightedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
