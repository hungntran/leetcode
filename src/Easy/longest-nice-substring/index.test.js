import { longestNiceSubstring } from '.';

it('Example case 1', () => {
  const input = 'YazaAay';
  expect(longestNiceSubstring(input)).toBe('aAa');
});

it('Example case 2', () => {
  const input = 'Bb';
  expect(longestNiceSubstring(input)).toBe('Bb');
});

it('Example case 3', () => {
  const input = 'c';
  expect(longestNiceSubstring(input)).toBe('');
});

it('Case 63', () => {
  const input = 'jcJ';
  expect(longestNiceSubstring(input)).toBe('');
});
