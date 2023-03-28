import { removeElement } from '.';

it('Example case 1', () => {
  const nums = [3, 2, 2, 3],
    val = 3;
  const output = 2;
  expect(removeElement(nums, val)).toBe(output);
});

it('Example case 1', () => {
  const nums = [0, 1, 2, 2, 3, 0, 4, 2],
    val = 2;
  const output = 5;
  expect(removeElement(nums, val)).toBe(output);
});
