import { query } from '@angular/animations';
import {
  Component,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  Input,
} from '@angular/core';

import { Observable, zip, fromEvent } from 'rxjs';
// import { Zi }
@Component({
  selector: 'oyc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() state: 'default' | 'focused' | 'filled' | 'error' = 'default';
  @Input() label: string = 'Label';
  element: HTMLElement;

  constructor(private el: ElementRef, private render: Renderer2) {
    // this.render = Renderer2;
    this.element = el.nativeElement;
  }

  bas(): void {
    const input = this.render.selectRootElement('input.input__text');

    fromEvent(input, 'focus').subscribe(() => {
      this.render.removeClass(this.element, `input__container_${this.state}`);
      this.render.addClass(this.element, 'input__container_focused');
    });
  }
}
