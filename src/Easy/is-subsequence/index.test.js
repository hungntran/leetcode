import { isSubsequence } from '.';

test('Test case 1', () => {
  expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
});

test('Test case 2', () => {
  expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
});
