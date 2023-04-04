import { deleteDuplicates } from '.';
import { isLinkedListEqual, arrayToLinkedList } from '../../utils';

it('Example case 1', () => {
  const input = arrayToLinkedList([1, 1, 2]);
  const output = arrayToLinkedList([1, 2]);
  const resolved = deleteDuplicates(input);
  expect(isLinkedListEqual(resolved, output)).toBe(true);
});

it('Example case 2', () => {
  const input = arrayToLinkedList([1, 1, 2, 3, 3]);
  const output = arrayToLinkedList([1, 2, 3]);
  const resolved = deleteDuplicates(input);
  expect(isLinkedListEqual(resolved, output)).toBe(true);
});
