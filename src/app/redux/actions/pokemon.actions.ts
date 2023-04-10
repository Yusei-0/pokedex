import { Pokemon } from '@/models';
import { createAction, props } from '@ngrx/store';

const savePokemon = createAction(
  'SavePokemons',
  props<{ pokemons: Pokemon[] }>()
);

const saveOnePokemon = createAction(
  'SaveOnePokemon',
  props<{ pokemon: Pokemon }>()
);
const resetPokemons = createAction('ResetPokemons');

export default {
  saveOnePokemon,
  savePokemon,
  resetPokemons,
};
