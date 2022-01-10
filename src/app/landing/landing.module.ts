import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingMainPageComponent } from './pages/ladning-main/landing-main-page.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    LandingMainPageComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
  ]
})
export class LandingModule { }
