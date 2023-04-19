import { isPalindrome } from '.';
import { arrayToLinkedList } from '../../utils';

it('Example case 1', () => {
  const input = arrayToLinkedList([1, 2, 2, 1]);
  const output = true;
  expect(isPalindrome(input)).toBe(output);
});

it('Example case 2', () => {
  const input = arrayToLinkedList([1, 2]);
  const output = false;
  expect(isPalindrome(input)).toBe(output);
});
