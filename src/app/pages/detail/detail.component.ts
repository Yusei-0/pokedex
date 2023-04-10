import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  ParamMap,
} from '@angular/router';
import { PokemonService } from '@/services/pokemon.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Pokemon } from '@/models';
import { pokemonAdapter } from '@/adapters/pokemon.adapter';
import { HeaderDetailComponent } from './styled-component/header-detail.styled.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  PageContainer,
  PageMain,
  PageTitle,
  PokemonNumberComponent,
  SectionTitle,
  Subtitle,
  Text,
} from '@/styled-components';
import { LoadingComponent } from '@/components/loading/loading.component';
import { isMovile } from '@/utilities/is-movile.utility';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    PageContainer,
    PageMain,
    Subtitle,
    SectionTitle,
    Text,
    HeaderDetailComponent,
    PokemonNumberComponent,
    LoadingComponent,
  ],
  providers: [PokemonService],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  pokemonSuscription: Subscription;
  id = '';
  pokemon: Pokemon;
  isMovileVw: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.isMovileVw = isMovile();
  }

  getData() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') || '';
      this.pokemonSuscription = this.pokemonService
        .getPokemon(this.id)
        .subscribe((data) => {
          this.pokemon = pokemonAdapter(data);
          console.log(this.pokemon);
        });
    });
  }

  ngOnDestroy(): void {
    if (this.pokemonSuscription) this.pokemonSuscription.unsubscribe();
  }
}
