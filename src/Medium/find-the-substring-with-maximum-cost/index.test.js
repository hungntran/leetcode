import { maximumCostSubstring } from '.';

it('Example case 1', () => {
  const s = 'adaa',
    chars = 'd',
    vals = [-1000];
  const output = 2;
  expect(maximumCostSubstring(s, chars, vals)).toBe(output);
});

it('Example case 2', () => {
  const s = 'abc',
    chars = 'abc',
    vals = [-1, -1, -1];
  const output = 0;
  expect(maximumCostSubstring(s, chars, vals)).toBe(output);
});
