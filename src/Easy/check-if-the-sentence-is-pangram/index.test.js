import { checkIfPangram } from '.';

test('Example 1', () => {
  expect(checkIfPangram('thequickbrownfoxjumpsoverthelazydog')).toBe(true);
});

test('Example 2', () => {
  expect(checkIfPangram('"leetcode"')).toBe(false);
});
