import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitle } from '@/styled-components';
import { PageContainer } from '@/components/page-container/page-container.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, PageTitle, PageContainer, PokemonCardComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}
