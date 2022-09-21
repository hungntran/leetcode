import { maxProfit } from '.';

test('Test case 1', () => {
  const input = [7, 1, 5, 3, 6, 4];
  expect(maxProfit(input)).toBe(5);
});

test('Test case 2', () => {
  const input = [7, 6, 4, 3, 1];
  expect(maxProfit(input)).toBe(0);
});

test('Test case 3', () => {
  const input = [2, 4, 1];
  expect(maxProfit(input)).toBe(2);
});

test('Test case 4', () => {
  const input = [2, 1, 2, 1, 0, 1, 2];
  expect(maxProfit(input)).toBe(2);
});
