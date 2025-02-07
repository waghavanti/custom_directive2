import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomStyleDirective } from './custom-style.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomStyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assi14_Q2';
}
