import { getTotalX } from '.';

test('Sample case', () => {
  expect(getTotalX([2, 4], [16, 32, 96])).toBe(3);
});

test('Sample case 2', () => {
  expect(getTotalX([3, 4], [24, 48])).toBe(2);
});
