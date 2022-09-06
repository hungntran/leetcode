import { sockMerchant } from '.';

test('Test case 0', () => {
  const pair = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
  expect(pair).toBe(3);
});

test('Test case 8', () => {
  const pair = sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
  expect(pair).toBe(4);
});
