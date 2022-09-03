import { bonAppetit } from '.';

describe('Bill Division', () => {
  test('Sample case 0', () => {
    expect(bonAppetit([3, 10, 2, 9], 1, 12)).toBe(5);
  });

  test('Sample case 1', () => {
    expect(bonAppetit([3, 10, 2, 9], 1, 7)).toBe('Bon Appetit');
  });
});
