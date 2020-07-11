import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirstCustom]'
})
export class FirstCustomDirective {
  constructor(private elementRef: ElementRef) { }

  private highLight(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = 'color';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highLight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight('null');
  }
}
