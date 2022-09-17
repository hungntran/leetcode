import { pivotIndex } from '.';

test('Test case 1', () => {
  expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
});

test('Test case 2', () => {
  expect(pivotIndex([1, 2, 3])).toBe(-1);
});

test('Test case 3', () => {
  expect(pivotIndex([2, 1, -1])).toBe(0);
});
