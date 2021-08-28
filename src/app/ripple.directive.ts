import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[oycRipple]'
})
export class RippleDirective {

  // @Input() rippleColor: string = 'rgba(36, 34, 34, 0.7)';
  @Input() rippleDisabled: boolean = false;
  element: HTMLElement;

  constructor(private el: ElementRef, renderer: Renderer2) {
    this.element = el.nativeElement;
  }

  @HostListener('mousedown', ['$event']) onClickRipple(event: MouseEvent): void {
    if (this.rippleDisabled) {
      return;
    }
    const circle = document.createElement('span');
    const diameter = Math.max(this.element.clientWidth, this.element.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - this.element.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - this.element.offsetTop - radius}px`;
    circle.className = 'ripple';

    this.element.appendChild(circle);
  }
}
