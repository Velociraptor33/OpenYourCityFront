import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'oyc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ButtonComponent implements OnInit {
  @Input() severity: 'primary' | 'secondary' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
