import { findMaxAverage } from '.';

it('Example case 1', () => {
  const nums = [1, 12, -5, -6, 50, 3],
    k = 4;
  expect(findMaxAverage(nums, k)).toBe(12.75);
});

it('Example case 2', () => {
  const nums = [5],
    k = 1;
  expect(findMaxAverage(nums, k)).toBe(5.0);
});
