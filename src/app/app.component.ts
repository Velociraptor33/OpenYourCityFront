import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'oyc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title: string = 'OpenYourCityFront';
}
