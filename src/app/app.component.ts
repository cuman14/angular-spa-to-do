import { HeaderComponent } from '@angular-spa-to-do/ui';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  selector: 'app-to-do-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-spa-to-do';
}
