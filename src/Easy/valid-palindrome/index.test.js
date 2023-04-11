import { isPalindrome } from '.';

it('Example case 1', () => {
  const input = 'A man, a plan, a canal: Panama';
  const output = true;
  expect(isPalindrome(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 'race a car';
  const output = false;
  expect(isPalindrome(input)).toBe(output);
});

it('Example case 3', () => {
  const input = ' ';
  const output = true;
  expect(isPalindrome(input)).toBe(output);
});

it('Test case 484', () => {
  const input = 'ab_a';
  const output = true;
  expect(isPalindrome(input)).toBe(output);
});

it('Test case 462', () => {
  const input = '0P';
  const output = false;
  expect(isPalindrome(input)).toBe(output);
});
