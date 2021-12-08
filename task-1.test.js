const task1 = require('./task-1');

test('string length', () => {
  expect(stringLength('test')).toBe(4);
});

test('string length between: 1 to 10', () => {
  expect(stringLength('')).toBe('error');
});
