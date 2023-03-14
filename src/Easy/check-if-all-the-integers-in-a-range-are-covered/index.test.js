import { isCovered } from '.';

it('Example case 1', () => {
  const ranges = [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    left = 2,
    right = 5;
  expect(isCovered(ranges, left, right)).toBe(true);
});

it('Example case 2', () => {
  const ranges = [
      [1, 10],
      [10, 20],
    ],
    left = 21,
    right = 21;
  expect(isCovered(ranges, left, right)).toBe(false);
});
