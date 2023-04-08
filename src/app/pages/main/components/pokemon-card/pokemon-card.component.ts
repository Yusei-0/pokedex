import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMON_EMPTY, Pokemon } from '@/models/pokemon.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {
  @Input()
  pokemon: Pokemon = POKEMON_EMPTY;

  skeletonHeight() {
    const screenWidth = window.innerWidth;

    return screenWidth < 550 ? '170px' : '260px';
  }
}
