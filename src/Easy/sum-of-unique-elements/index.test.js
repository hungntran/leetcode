import sumOfUnique from '.';

it('Example 1', () => {
  const nums = [1, 2, 3, 2];
  expect(sumOfUnique(nums)).toBe(4);
});

it('Example 2', () => {
  const nums = [1, 1, 1, 1, 1];
  expect(sumOfUnique(nums)).toBe(0);
});

it('Example 3', () => {
  const nums = [1, 2, 3, 4, 5];
  expect(sumOfUnique(nums)).toBe(15);
});
