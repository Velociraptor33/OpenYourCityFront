import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingMainPageComponent } from './pages/ladning-main/landing-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingMainPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule { }
