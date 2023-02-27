import { reformat } from '.';

it('Example case 1', () => {
  const input = 'a0b1c2';
  expect(reformat(input)).toBe('c2b1a0');
});

it('Example case 2', () => {
  const input = 'leetcode';
  expect(reformat(input)).toBe('');
});

it('Example case 3', () => {
  const input = '1229857369';
  expect(reformat(input)).toBe('');
});

it('Example case 4', () => {
  const input = 'covid2019';
  expect(reformat(input)).toBe('d9i1v0o2c');
});
