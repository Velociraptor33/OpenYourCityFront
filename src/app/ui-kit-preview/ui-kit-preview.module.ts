import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitPageComponent } from './pages/ui-kit-page/ui-kit-page.component';
import { UiKitPreviewRoutingModule } from './ui-kit-preview-routing.module';

@NgModule({
  declarations: [
    UiKitPageComponent,
  ],
  imports: [
    CommonModule,
    UiKitPreviewRoutingModule,
  ]
})
export class UiKitPreviewModule { }
