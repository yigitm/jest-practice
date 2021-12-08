const task3 = require('./task-3');

describe('calculator: add', () => {
  test('a + b', () => {
    expect(task3.add(1, 2)).toEqual(3);
    expect(task3.add(-1, 2)).toEqual(1);
    expect(task3.add(-1, -2)).toEqual(-3);
  });
});

describe('calculator: substract', () => {
  test('a - b', () => {
    expect(task3.substract(1, 2)).toEqual(-1);
    expect(task3.substract(-1, 2)).toEqual(-3);
    expect(task3.substract(-1, -2)).toEqual(1);
  });
});

describe('calculator: multiple', () => {
  test('a * b', () => {
    expect(task3.multiple(1, 2)).toEqual(2);
    expect(task3.multiple(-1, 2)).toEqual(-2);
    expect(task3.multiple(-1, -2)).toEqual(2);
  });
});

describe('calculator: divide', () => {
  test('a / b', () => {
    expect(task3.divide(1, 2)).toEqual(0.5);
    expect(task3.divide(-1, 2)).toEqual(-0.5);
    expect(task3.divide(-1, -2)).toEqual(0.5);
  });
});
