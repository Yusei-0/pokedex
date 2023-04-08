import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ROUTES } from '@/pages/routes';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { PokemonService } from '@/services/pokemon.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES), PokemonService],
}).catch((err) => console.error(err));
