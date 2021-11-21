import {
  Component,
  ChangeDetectionStrategy,
  Input,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'oyc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() state: 'default' | 'focused' | 'filled' | 'error' = 'default';
  @Input() inputTypes:
    | 'email'
    | 'hidden'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url' = 'text';
  @Input() label: string = 'First Name';
  @Input() assistiveText: string = 'Assistive text';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() error: boolean = false;
  @Input() prefix: TemplateRef<any>  | undefined;
  @Input() suffix: TemplateRef<any> | undefined;

  constructor() {}
}
