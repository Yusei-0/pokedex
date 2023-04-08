export interface PokemonDTO {
  id: number;
  name: string;
  types: {
    slot: number;
    type: {
      url: string;
      name: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}
