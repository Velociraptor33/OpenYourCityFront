import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:  () => import('./landing/landing.module').then(m => m.LandingModule),
  },
  {
    path: 'ui-kit',
    loadChildren:  () => import('./ui-kit-preview/ui-kit-preview.module').then(m => m.UiKitPreviewModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
