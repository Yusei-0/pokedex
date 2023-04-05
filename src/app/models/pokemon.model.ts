export interface Pokemon {
  name: string;
  number: string;
  background: string;
  imageUrl: string;
  type: string;
}

export const POKEMON_EMPTY: Pokemon = {
  name: '',
  number: '',
  background: '',
  imageUrl: '',
  type: '',
};
