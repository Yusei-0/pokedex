export interface Pokemon {
  name: string;
  number: string;
  background: string;
  imageUrl: string;
  types: string[];
}

export const POKEMON_EMPTY: Pokemon = {
  name: '',
  number: '',
  background: '',
  imageUrl: '',
  types: [],
};
