import { rotateLeft } from '.';

test('Test case 0', () => {
  expect(rotateLeft(4, [1, 2, 3, 4, 5])).toEqual([5, 1, 2, 3, 4]);
});
