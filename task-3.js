let calculator = {
  add: (a, b) => a + b,
  substract: (a, b) => a - b,
  multiple: (a, b) => a * b,
  divide: (a, b) => {
    if (a === 0 || b === 0) {
      return 'Error!';
    }
    return a / b;
  },
};
module.exports = calculator;
