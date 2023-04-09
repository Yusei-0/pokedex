import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMON_EMPTY, Pokemon } from '@/models/pokemon.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PokemonPointer } from '@/models';
import { PokemonService } from '@/services/pokemon.service';
import { Subscription } from 'rxjs';
import { pokemonAdapter } from '@/adapters/pokemon.adapter';
import { isMovile } from '@/utilities/is-movile.utility';

@Component({
  selector: 'pokemon-card',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  providers: [],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit, OnDestroy {
  @Input()
  pokemonPointer: PokemonPointer;

  @Input()
  pokemon: Pokemon = POKEMON_EMPTY;

  pokemonSuscription: Subscription;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonData();
  }

  ngOnDestroy(): void {
    this.unsuscribe();
  }

  getPokemonData() {
    if (this.pokemonPointer)
      this.pokemonSuscription = this.pokemonService
        .getPokemon(this.pokemonPointer.name)
        .subscribe((data) => {
          // console.log(data.name);
          let res = data;

          if (data.name === this.pokemonPointer.name) {
            this.pokemon = pokemonAdapter(res);
            this.unsuscribe();
          }

          // console.log(this.pokemon);
        });
  }

  unsuscribe() {
    if (this.pokemonSuscription) this.pokemonSuscription.unsubscribe();
  }

  skeletonHeight() {
    return isMovile() ? '170px' : '260px';
  }
}
