import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { fromEvent, zip } from 'rxjs';
import { first } from 'rxjs/operators';

@Directive({
  selector: '[oycRipple]'
})

export class RippleDirective {

  @Input() rippleColor!: string;
  @Input() rippleDisabled: boolean = false;
  element: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.element = el.nativeElement;
  }

  @HostListener('mousedown', ['$event'])
  onClickRipple(event: MouseEvent): void {
    if (this.rippleDisabled) {
      return;
    }
    const circle = this.renderer.createElement('span');
    const diameter = Math.max(this.element.clientWidth, this.element.clientHeight);
    const radius = diameter / 2;

    this.renderer.setStyle(circle, 'width', `${diameter}px`);
    this.renderer.setStyle(circle, 'height', `${diameter}px`);

    this.renderer.setStyle(circle, 'left', `${event.clientX - this.element.offsetLeft - radius}px`);
    this.renderer.setStyle(circle, 'top', `${event.clientY - this.element.offsetTop - radius}px`);

    this.renderer.setStyle(circle, 'background', this.rippleColor);

    this.renderer.addClass(circle, 'ripple');

    this.renderer.appendChild(this.element, circle);

    zip(
      fromEvent(circle, 'animationend'),
      fromEvent(this.element, 'mouseup')
    ).pipe(
      first()
    ).subscribe(() => this.renderer.removeChild(this.element, circle));
  }
}
