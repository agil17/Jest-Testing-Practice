const capitalize = (str) => {
  let letter = str.charAt(0);
  letter = letter.toUpperCase();
  return letter.concat(str.slice(1));
};

export { capitalize };
