import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[oycRipple]'
})
export class RippleDirective {

  @Input() color: 'red' | '' = ''; // '' = 'red';
  element: any;
  constructor(el: ElementRef) {
    this.element = el.nativeElement;
    // this.element.classList.add('ripple');
  }

  @HostListener('mousedown', ['$event']) onClickRipple(event: MouseEvent): void {
    const circle = document.createElement('span');
    const diameter = Math.max(this.element.clientWidth, this.element.clientHeight);
    const radius = diameter / 2;
    console.log('clientY', event.clientY);
    console.log('clientX', event.clientX);

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - this.element.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - this.element.offsetTop - radius}px`;
    console.log(circle.style.top);
    console.log(circle.style.left);
    circle.className = 'ripple';

    this.element.appendChild(circle);
  }
}
