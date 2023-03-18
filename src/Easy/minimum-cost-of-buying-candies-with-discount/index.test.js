import { minimumCost } from '.';

it('Example case 1', () => {
  const input = [1, 2, 3];
  const output = 5;
  expect(minimumCost(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [6, 5, 7, 9, 2, 2];
  const output = 23;
  expect(minimumCost(input)).toBe(output);
});

it('Example case 3', () => {
  const input = [5, 5];
  const output = 10;
  expect(minimumCost(input)).toBe(output);
});
