const cipher = (str, shift) => {
  return str
    .split("")
    .map((letter) => {
      let uniCode = letter.charCodeAt(0) + shift;
      if (uniCode > 122) {
        uniCode = (uniCode % 122) + 31;
      }
      return String.fromCharCode(uniCode);
    })
    .join("");
};

// console.log(cipher("xyz abc!,.", 50));

export { cipher };
