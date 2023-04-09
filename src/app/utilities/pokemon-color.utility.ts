export interface TypeColorPokemon {
  pokemonType: string;
  backgroundColor: string;
}

export const COLOR_DEFAULT = '#62626334';

export const PokemonsTypeColor: TypeColorPokemon[] = [
  {
    pokemonType: 'grass',
    backgroundColor: '#b3f8b3cc',
  },
  {
    pokemonType: 'fire',
    backgroundColor: '#ff222242',
  },
  {
    pokemonType: 'water',
    backgroundColor: '#4a22ff34',
  },
  {
    pokemonType: 'bug',
    backgroundColor: '#259b2f5d',
  },
  {
    pokemonType: 'normal',
    backgroundColor: '#dd721a5d',
  },
  {
    pokemonType: 'poison',
    backgroundColor: '#e911c55d',
  },
  {
    pokemonType: 'electric',
    backgroundColor: '#f4f8055d',
  },
];

export const pokemonColorByType = (pokemonType: string): string => {
  for (let i = 0; i < PokemonsTypeColor.length; i++) {
    if (pokemonType == PokemonsTypeColor[i].pokemonType) {
      return PokemonsTypeColor[i].backgroundColor;
    }
  }

  return COLOR_DEFAULT;
};
