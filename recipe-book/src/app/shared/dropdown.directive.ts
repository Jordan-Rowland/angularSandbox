import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor(
      private el: ElementRef,
    ) { }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.el.nativeElement.contains(event.target)
        ? this.el.nativeElement.classList.toggle('open')
        : this.el.nativeElement.classList.remove('open');
    }

}
