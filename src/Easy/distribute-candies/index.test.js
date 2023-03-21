import { distributeCandies } from '.';

it('Example case 1', () => {
  const input = [1, 1, 2, 2, 3, 3];
  const output = 3;
  expect(distributeCandies(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [1, 1, 2, 3];
  const output = 2;
  expect(distributeCandies(input)).toBe(output);
});

it('Example case 3', () => {
  const input = [6, 6, 6, 6];
  const output = 1;
  expect(distributeCandies(input)).toBe(output);
});
