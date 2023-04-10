import { Pokemon } from './pokemon.model';

export interface PokemonsState {
  pokemons: Pokemon[];
}

export const initialPokemonSate: Pokemon[] = [];
