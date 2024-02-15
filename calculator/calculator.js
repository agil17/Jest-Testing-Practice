const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      return "Can't divide by 0";
    } else {
      return a / b;
    }
  },
};

export {
    calculator
}
