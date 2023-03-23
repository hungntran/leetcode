import { minimumRecolors } from '.';

it('Example case 1', () => {
  const blocks = 'WBBWWBBWBW',
    k = 7;
  const output = 3;
  expect(minimumRecolors(blocks, k)).toBe(output);
});

it('Example case 2', () => {
  const blocks = 'WBWBBBW',
    k = 2;
  const output = 0;
  expect(minimumRecolors(blocks, k)).toBe(output);
});

it('Test case 111', () => {
  const blocks = 'BWWWBB',
    k = 6;
  const output = 3;
  expect(minimumRecolors(blocks, k)).toBe(output);
});

it('Test case 117', () => {
  const blocks =
      'BBBBBWWBBWBWBWWWBWBWBBBBWBBBBWBWBWBWBWWBWWBWBWWWWBBWWWWBWWWWBWBBWBBWBBWWW',
    k = 29;
  const output = 10;
  expect(minimumRecolors(blocks, k)).toBe(output);
});
