import { maximizeGreatness } from '.';

it('Example case 1', () => {
  const input = [1, 3, 5, 2, 1, 3, 1];
  const output = 4;
  expect(maximizeGreatness(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [1, 2, 3, 4];
  const output = 3;
  expect(maximizeGreatness(input)).toBe(output);
});
