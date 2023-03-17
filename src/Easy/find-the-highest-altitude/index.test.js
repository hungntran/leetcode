import { largestAltitude } from '.';

it('Example case 1', () => {
  const input = [-5, 1, 5, 0, -7];
  expect(largestAltitude(input)).toBe(1);
});

it('Example case 2', () => {
  const input = [-4, -3, -2, -1, 4, 3, 2];
  expect(largestAltitude(input)).toBe(0);
});
