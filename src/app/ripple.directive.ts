import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[oycRipple]'
})
export class RippleDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('ripple');
  }

}
