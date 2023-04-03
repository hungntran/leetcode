import { climbStairs } from '.';

it('Example case 1', () => {
  const input = 2;
  const output = 2;
  expect(climbStairs(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 3;
  const output = 3;
  expect(climbStairs(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 43;
  const output = 701408733;
  expect(climbStairs(input)).toBe(output);
});
