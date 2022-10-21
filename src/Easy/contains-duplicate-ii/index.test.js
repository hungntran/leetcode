import { containsNearbyDuplicate } from '.';

test('Test case 1', () => {
  const nums = [1, 2, 3, 1];
  const k = 3;
  expect(containsNearbyDuplicate(nums, k)).toBe(true);
});

test('Test case 2', () => {
  const nums = [1, 0, 1, 1];
  const k = 1;
  expect(containsNearbyDuplicate(nums, k)).toBe(true);
});

test('Test case 3', () => {
  const nums = [1, 2, 3, 1, 2, 3];
  const k = 2;
  expect(containsNearbyDuplicate(nums, k)).toBe(false);
});
