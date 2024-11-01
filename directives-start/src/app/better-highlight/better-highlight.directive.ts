import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'pink';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
  }
  
  
  ngOnInit(): void {
  }
}


