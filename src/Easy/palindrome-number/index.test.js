import { isPalindrome } from '.';

it('Example case 1', () => {
  const input = 121;
  const output = true;
  expect(isPalindrome(input)).toBe(output);
});

it('Example case 2', () => {
  const input = -121;
  const output = false;
  expect(isPalindrome(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 10;
  const output = false;
  expect(isPalindrome(input)).toBe(output);
});
