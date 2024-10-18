import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }
    
    ngOnInit() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'limegreen');
    }
}