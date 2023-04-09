import { Pokemon, PokemonDTO } from '@/models';
import { pokemonNumberByID } from '@/utilities/pokemon-id.utility';
import { POKEMON_EMPTY } from '@/models/pokemon.model';
import { filterType } from '@/utilities/filter-pokemon-type.utility';
import { pokemonColorByType } from '@/utilities/pokemon-color.utility';

export const pokemonAdapter = (dto: PokemonDTO): Pokemon => {
  let newPokemon: Pokemon = POKEMON_EMPTY;

  newPokemon.name = dto.name;
  newPokemon.imageUrl = dto.sprites.other.dream_world.front_default;
  newPokemon.number = pokemonNumberByID(dto.id);
  newPokemon.types = filterType(dto.types);
  newPokemon.background = pokemonColorByType(newPokemon.types[0]);

  return { ...newPokemon };
};
