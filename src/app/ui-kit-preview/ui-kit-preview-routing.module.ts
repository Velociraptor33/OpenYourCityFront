import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiKitPageComponent } from './pages/ui-kit-page/ui-kit-page.component';

const routes: Routes = [
  {
    path: '',
    component: UiKitPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiKitPreviewRoutingModule { }
