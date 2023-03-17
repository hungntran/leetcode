import { maxAscendingSum } from '.';

it('Example case 1', () => {
  const input = [10, 20, 30, 5, 10, 50];
  expect(maxAscendingSum(input)).toBe(65);
});

it('Example case 2', () => {
  const input = [10, 20, 30, 40, 50];
  expect(maxAscendingSum(input)).toBe(150);
});

it('Example case 3', () => {
  const input = [12, 17, 15, 13, 10, 11, 12];
  expect(maxAscendingSum(input)).toBe(33);
});

it('Example case 4', () => {
  const input = [3, 6, 10, 1, 8, 9, 9, 8, 9];
  expect(maxAscendingSum(input)).toBe(19);
});
