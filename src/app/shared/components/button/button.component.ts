import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'oyc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() severity:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'danger'
    | 'success' = 'primary';
  @Input() shape: 'contained' | 'outlined' = 'contained';
  @Input() disabled: boolean = false;

  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  severityToRippleColor: { [index: string]: any } = {
    contained: {
      primary: '#FFFFFF52',
      secondary: '#FFFFFF8A',
      warning: '#FFFFFF8A',
      danger: '#FFFFFF8A',
      success: '#FFFFFF8A',
    },
    outlined: {
      primary: '#E3F2FD8A',
      warning: '#FFF5E58A',
      danger: '#FCE7E78A',
      success: '#ECF9F38A',
    },
  };

  constructor() {}

  onButtonCLick(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}
