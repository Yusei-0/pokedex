import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'pokemon-number',
  template: `<p><ng-content/></p>`,
  styleUrls: ['./pokemon-number.scss'],
})
export class PokemonNumberComponent {}
