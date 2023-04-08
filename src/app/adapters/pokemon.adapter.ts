import { Pokemon, POKEMON_EMPTY, PokemonDTO } from '@/models';
import { filterType, pokemonColorByType, pokemonNumberByID } from '@/utilities';

export const pokemonAdapter = (dto: PokemonDTO): Pokemon => {
  let newPokemon: Pokemon = POKEMON_EMPTY;

  newPokemon.name = dto.name;
  newPokemon.imageUrl = dto.sprites.other.dream_world.front_default;
  newPokemon.number = pokemonNumberByID(dto.id);
  newPokemon.types = filterType(dto.types);
  newPokemon.background = pokemonColorByType(newPokemon.types[0]);

  return newPokemon;
};
