import { repeatedNTimes } from '.';

it('Example 1', () => {
  const input = [1, 2, 3, 3];
  expect(repeatedNTimes(input)).toBe(3);
});

it('Example 2', () => {
  const input = [2, 1, 2, 5, 3, 2];
  expect(repeatedNTimes(input)).toBe(2);
});

it('Example 3', () => {
  const input = [5, 1, 5, 2, 5, 3, 5, 4];
  expect(repeatedNTimes(input)).toBe(5);
});
