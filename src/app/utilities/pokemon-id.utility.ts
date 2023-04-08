export const pokemonNumberByID = (id: number): string => {
  let res = '';

  if (id < 10) res = '00' + id;

  if (id < 100 && id > 9) res = '0' + id;

  if (id > 99) res = '' + id;

  return res;
};
