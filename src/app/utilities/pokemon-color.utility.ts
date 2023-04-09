export interface TypeColorPokemon {
  pokemonType: string;
  backgroundColor: string;
}

export const PokemonsTypeColor: TypeColorPokemon[] = [];

export const pokemonColorByType = (pokemonType: string): string => {
  let res = '';

  // PokemonsTypeColor.forEach((index) => {
  //   if (index.pokemonType === pokemonType) res = index.backgroundColor;
  // });

  return res;
};
