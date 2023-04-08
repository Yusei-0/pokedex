import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PokemonDTO } from '@/models';
import { ManyPokemonsDto } from '@/models/many-pokemons.dto';
import { catchError, retry } from 'rxjs';
import { errorsHttp } from '@/utilities/errors-http.utility';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemon(pokemon: string) {
    return this.http
      .get<PokemonDTO>(`${this.apiUrl}/pokemon/${pokemon}`)
      .pipe(retry(3), catchError(errorsHttp));
  }

  getPokemonsWithParams(limit?: number, offset?: number) {
    let params = new HttpParams();

    if (limit && offset != null) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }

    return this.http
      .get<ManyPokemonsDto>(`${this.apiUrl}/pokemon`, {
        params: params,
      })
      .pipe(retry(3), catchError(errorsHttp));
  }
}
