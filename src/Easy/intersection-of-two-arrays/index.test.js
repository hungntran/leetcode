import { intersection } from '.';

it('Example case 1', () => {
  const nums1 = [1, 2, 2, 1],
    nums2 = [2, 2];
  const output = [2];
  expect(intersection(nums1, nums2)).toStrictEqual(output);
});

it('Example case 2', () => {
  const nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4];
  const output = [4, 9];
  expect(intersection(nums1, nums2)).toStrictEqual(output);
});
