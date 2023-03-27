import { removeDuplicates } from '.';

it('Example case 1', () => {
  const input = [1, 1, 2];
  const output = 2;
  expect(removeDuplicates(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const output = 5;
  expect(removeDuplicates(input)).toBe(output);
});
