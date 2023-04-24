import { missingNumber } from '.';

it('Example case 1', () => {
  const input = [3, 0, 1];
  const output = 2;
  expect(missingNumber(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [0, 1];
  const output = 2;
  expect(missingNumber(input)).toBe(output);
});

it('Example case 3', () => {
  const input = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  const output = 8;
  expect(missingNumber(input)).toBe(output);
});
