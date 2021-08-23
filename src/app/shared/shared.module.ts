import { NgModule } from '@angular/core';

import { ButtonModule } from './components/button/button.module';

import { RippleModule } from './directives/ripple.module';

@NgModule({
  imports: [
    ButtonModule,
    RippleModule,
  ],
  exports: [
    ButtonModule,
    RippleModule,
  ]
})

export class SharedModule { }
