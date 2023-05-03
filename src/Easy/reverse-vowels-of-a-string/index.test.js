import { reverseVowels } from '.';

it('Example case 1', () => {
  const input = 'hello';
  const output = 'holle';
  expect(reverseVowels(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 'leetcode';
  const output = 'leotcede';
  expect(reverseVowels(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 'aA';
  const output = 'Aa';
  expect(reverseVowels(input)).toBe(output);
});
