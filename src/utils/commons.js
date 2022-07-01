export const capitalize = ([first, ...rest]) =>
  first.toUpperCase().concat(...rest);

export const startWithZeroes = (arg) => arg.toString().padStart(3, "0");
