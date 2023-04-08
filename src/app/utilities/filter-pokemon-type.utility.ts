export const filterType = (
  types: {
    slot: number;
    type: {
      url: string;
      name: string;
    };
  }[]
): string[] => {
  let responseTypes: string[] = [];

  types.forEach((t) => {
    responseTypes = [...responseTypes, t.type.name];
  });

  return responseTypes;
};
