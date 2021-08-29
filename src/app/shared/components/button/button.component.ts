import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'oyc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent {
  @Input() severity: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' = 'primary';
  @Input() shape: 'contained' | 'outlined' = 'contained';
  @Input() disabled: true | false = false;
  @Input() rippleColor: string = 'rgba(36, 34, 34, 0.7)';

  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  onButtonCLick(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}
