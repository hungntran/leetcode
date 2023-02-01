import { minCostClimbingStairs } from '.';

it('Example case 1', () => {
  const input = [10, 15, 20];
  expect(minCostClimbingStairs(input)).toBe(15);
});

it('Example case 2', () => {
  const input = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
  expect(minCostClimbingStairs(input)).toBe(6);
});
