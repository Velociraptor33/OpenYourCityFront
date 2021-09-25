import { NgModule } from '@angular/core';

import { ButtonModule } from './components/button/button.module';

import { RippleModule } from './directives/ripple.module';
import { InputModule } from './components/input/input.module';

@NgModule({
  imports: [
    ButtonModule,
    RippleModule,
    InputModule,
  ],
  exports: [
    ButtonModule,
    RippleModule,
    InputModule,
  ]
})

export class SharedModule { }
