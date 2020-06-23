const func = require('./func');

test('add of 2+2 value', () => {
  expect(func.add(2, 2)).toBe(4);
});
