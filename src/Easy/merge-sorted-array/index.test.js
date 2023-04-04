import { merge } from '.';

it('Example case 1', () => {
  const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3;
  const output = [1, 2, 2, 3, 5, 6];
  merge(nums1, m, nums2, n);
  expect(nums1).toStrictEqual(output);
});

it('Example case 2', () => {
  const nums1 = [1],
    m = 1,
    nums2 = [],
    n = 0;
  const output = [1];
  merge(nums1, m, nums2, n);
  expect(nums1).toStrictEqual(output);
});

it('Example case 3', () => {
  const nums1 = [0],
    m = 0,
    nums2 = [1],
    n = 1;
  const output = [1];
  merge(nums1, m, nums2, n);
  expect(nums1).toStrictEqual(output);
});

it('Example case 4', () => {
  const nums1 = [2, 0],
    m = 1,
    nums2 = [1],
    n = 1;
  const output = [1, 2];
  merge(nums1, m, nums2, n);
  expect(nums1).toStrictEqual(output);
});

it('Example case 5', () => {
  const nums1 = [4, 5, 6, 0, 0, 0],
    m = 3,
    nums2 = [1, 2, 3],
    n = 3;
  const output = [1, 2, 3, 4, 5, 6];
  merge(nums1, m, nums2, n);
  expect(nums1).toStrictEqual(output);
});

it('Test case 56', () => {
  const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0],
    m = 6,
    nums2 = [1, 2, 2],
    n = 3;
  const output = [-1, 0, 0, 1, 2, 2, 3, 3, 3];
  merge(nums1, m, nums2, n);
  expect(nums1).toStrictEqual(output);
});
