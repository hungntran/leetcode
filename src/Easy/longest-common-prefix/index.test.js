import { longestCommonPrefix } from '.';

it('Example case 1', () => {
  const input = ['flower', 'flow', 'flight'];
  const output = 'fl';
  expect(longestCommonPrefix(input)).toBe(output);
});

it('Example case 2', () => {
  const input = ['dog', 'racecar', 'car'];
  const output = '';
  expect(longestCommonPrefix(input)).toBe(output);
});

it('Example case 3', () => {
  const input = ['', ''];
  const output = '';
  expect(longestCommonPrefix(input)).toBe(output);
});
