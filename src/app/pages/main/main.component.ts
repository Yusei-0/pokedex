import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitle } from '@/styled-components';
import { PageContainer } from '@/components/page-container/page-container.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonService } from '@/services/pokemon.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ManyPokemonsDto } from '@/models/many-pokemons.dto';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    PageTitle,
    PageContainer,
    PokemonCardComponent,
  ],
  providers: [PokemonService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  pokemonSubscription: Subscription;
  actualCallApi: ManyPokemonsDto;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonData();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  unsubscribe() {
    if (this.pokemonSubscription) this.pokemonSubscription.unsubscribe();
  }

  getPokemonData() {
    this.pokemonSubscription = this.pokemonService
      .getPokemonsWithParams()
      .subscribe((data) => {
        this.actualCallApi = data;
        console.log(this.actualCallApi);
      });
  }
}
