import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  template: `
    <h1>Tittle</h1>
    <router-outlet></router-outlet>
    <b>asas</b>
  `,
})
export class AppComponent {}
