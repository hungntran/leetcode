import { removePalindromeSub } from '.';

it('Example case 1', () => {
  const input = 'ababa';
  const output = 1;
  expect(removePalindromeSub(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 'abb';
  const output = 2;
  expect(removePalindromeSub(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 'baabb';
  const output = 2;
  expect(removePalindromeSub(input)).toBe(output);
});

it('Test case 30', () => {
  const input = 'abbaaaab';
  const output = 2;
  expect(removePalindromeSub(input)).toBe(output);
});
