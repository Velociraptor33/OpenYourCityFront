import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'oyc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent implements OnInit {
  @Input() severity: 'primary' | 'secondary' | 'warning' | 'danger' | 'success' = 'primary';
  @Input() shape: 'contained' | 'outlined' = 'contained';
  @Input() disabled: 'isButtonDisabled' | '' = '';

  constructor() { }

  ngOnInit(): void {
  }

}
