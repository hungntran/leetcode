import { shuffle } from '.';

it('Example case 1', () => {
  const nums = [2, 5, 1, 3, 4, 7],
    n = 3;
  expect(shuffle(nums, n)).toStrictEqual([2, 3, 5, 4, 1, 7]);
});

it('Example case 2', () => {
  const nums = [1, 2, 3, 4, 4, 3, 2, 1],
    n = 4;
  expect(shuffle(nums, n)).toStrictEqual([1, 4, 2, 3, 3, 2, 4, 1]);
});

it('Example case 3', () => {
  const nums = [1, 1, 2, 2],
    n = 2;
  expect(shuffle(nums, n)).toStrictEqual([1, 2, 1, 2]);
});
