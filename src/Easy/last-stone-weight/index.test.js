import { lastStoneWeight } from '.';

it('Example case 1', () => {
  const input = [2, 7, 4, 1, 8, 1];
  const output = 1;
  expect(lastStoneWeight(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [1];
  const output = 1;
  expect(lastStoneWeight(input)).toBe(output);
});
