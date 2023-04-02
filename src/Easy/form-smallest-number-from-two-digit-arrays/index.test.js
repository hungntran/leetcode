import { minNumber } from '.';

it('Example case 1', () => {
  const nums1 = [4, 1, 3],
    nums2 = [5, 7];
  const output = 15;
  expect(minNumber(nums1, nums2)).toBe(output);
});

it('Example case 2', () => {
  const nums1 = [3, 5, 2, 6],
    nums2 = [3, 1, 7];
  const output = 3;
  expect(minNumber(nums1, nums2)).toBe(output);
});
