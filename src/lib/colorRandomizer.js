export const colorRandomizer = (colors) => {
  const randomColor = Math.floor(Math.random() * (colors.length - 0) + 0);
  return colors[randomColor];
};
