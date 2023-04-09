export const isMovile = () => {
  const screenWidth = window.innerWidth;

  return screenWidth < 550 ? true : false;
};
