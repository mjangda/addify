const addify = require('./index');

describe('addify', () => {
  test('adds two numbers', () => {
    expect(addify(2, 3)).toBe(5);
  });

  test('adds multiple numbers', () => {
    expect(addify(1, 2, 3, 4, 5)).toBe(15);
  });

  test('returns 0 when no arguments provided', () => {
    expect(addify()).toBe(0);
  });

  test('adds single number', () => {
    expect(addify(42)).toBe(42);
  });

  test('handles negative numbers', () => {
    expect(addify(-5, 10, -3)).toBe(2);
  });

  test('handles decimal numbers', () => {
    expect(addify(1.5, 2.5, 3)).toBe(7);
  });

  test('handles zero values', () => {
    expect(addify(0, 0, 5)).toBe(5);
  });
});
