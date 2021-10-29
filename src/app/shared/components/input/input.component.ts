import {
  Component,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  Input,
  HostListener,
} from '@angular/core';

import { Observable, fromEvent, zip } from 'rxjs';
@Component({
  selector: 'oyc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() state: 'default' | 'focused' | 'filled' | 'error' = 'default';
  @Input() label: string = 'Label';
  @Input() assistiveText: string = 'Assistive text';
  @Input() disabled: boolean = false;

  constructor(private el: ElementRef, private render: Renderer2) {}

  ch($event: FocusEvent): void {
    const inputField = this.el.nativeElement.querySelector('.input__field');
    const inputLabel = this.el.nativeElement.querySelector('.input__label');

    const inputFieldValue = inputField.value;

    if (inputFieldValue !== '') {
      this.render.addClass(inputLabel, 'input__label_active');
    } else {
      this.render.removeClass(inputLabel, 'input__label_active');
    }
  }
}
