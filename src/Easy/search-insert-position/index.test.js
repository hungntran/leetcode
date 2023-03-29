import { searchInsert } from '.';

it('Example case 1', () => {
  const nums = [1, 3, 5, 6],
    target = 5;
  const output = 2;
  expect(searchInsert(nums, target)).toBe(output);
});

it('Example case 2', () => {
  const nums = [1, 3, 5, 6],
    target = 2;
  const output = 1;
  expect(searchInsert(nums, target)).toBe(output);
});

it('Example case 3', () => {
  const nums = [1, 3, 5, 6],
    target = 7;
  const output = 4;
  expect(searchInsert(nums, target)).toBe(output);
});
