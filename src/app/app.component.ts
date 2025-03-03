import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavComponent]  // Add this line if NavComponent is standalone
})
export class AppComponent { }