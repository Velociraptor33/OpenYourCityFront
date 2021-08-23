import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';

import { RippleModule } from '../../directives/ripple.module';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    RippleModule,
  ],
  exports: [
    ButtonComponent
  ]
})

export class ButtonModule { }
