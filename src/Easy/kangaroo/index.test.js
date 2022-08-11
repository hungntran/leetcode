import kangaroo from '.';

test('21, 6, 47, 3', () => {
  expect(kangaroo(21, 6, 47, 3)).toBe('NO');
});

test('28, 8, 96, 2', () => {
  expect(kangaroo(21, 6, 47, 3)).toBe('NO');
});

test('43, 2, 70, 2', () => {
  expect(kangaroo(43, 2, 70, 2)).toBe('NO');
});

test('240, 575, 9179, 9986', () => {
  expect(kangaroo(240, 575, 9179, 9986)).toBe('NO');
});

test('0, 3, 4, 2', () => {
  expect(kangaroo(0, 3, 4, 2)).toBe('YES');
});
