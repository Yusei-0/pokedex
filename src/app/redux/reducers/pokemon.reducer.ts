import { createReducer, on } from '@ngrx/store';
import PokemonActions from '@/redux/actions/pokemon.actions';
import { Pokemon } from '@/models';

export const initialPokemonSate: Pokemon[] = [];

export const pokemonReducer = createReducer(
  initialPokemonSate,
  on(PokemonActions.savePokemon, (state, { pokemons }) => [...pokemons]),
  on(PokemonActions.saveOnePokemon, (state, { pokemon }) => {
    for (let i = 0; i < state.length; i++)
      if (state[i].name === pokemon.name || state[i].number === pokemon.number)
        return state;

    return [...state, pokemon];
  }),
  on(PokemonActions.resetPokemons, (state) => initialPokemonSate)
);
