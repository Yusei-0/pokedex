import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitle, Text } from '@/styled-components';
import { PageContainer } from '@/components/page-container/page-container.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonService } from '@/services/pokemon.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { ManyPokemonsDto } from '@/models/many-pokemons.dto';
import { Pokemon, PokemonPointer } from '@/models';
import { LoadingComponent } from '@/components/loading/loading.component';
import { SearchComponent } from './components/search/search.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    PageTitle,
    Text,
    PageContainer,
    PokemonCardComponent,
    LoadingComponent,
    SearchComponent,
  ],
  providers: [PokemonService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  pokemonSubscription: Subscription;
  pokemons: PokemonPointer[];
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
      .getPokemonsWithParams(18, 0)
      .subscribe((data) => {
        this.actualCallApi = data;
        this.pokemons = [...this.actualCallApi.results];
        console.log(this.pokemons);
        // setInterval(()=> console.log(this.pokemons), 2000)
      });
  }
}
