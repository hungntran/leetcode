import { unequalTriplets } from '.';

test('Example 1', () => {
  const input = [4, 4, 2, 4, 3];
  expect(unequalTriplets(input)).toBe(3);
});

test('Example 2', () => {
  const input = [1, 1, 1, 1, 1];
  expect(unequalTriplets(input)).toBe(0);
});

test('Test case 32', () => {
  const input = [1, 3, 1, 2, 4];
  expect(unequalTriplets(input)).toBe(7);
});
