import { NgModule } from '@angular/core';

import { ButtonModule } from './components/button/button.module';

@NgModule({
  imports: [
    ButtonModule
  ],
  exports: [
    ButtonModule
  ]
})

export class SharedModule { }
