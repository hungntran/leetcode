import { isPowerOfFour } from '.';

it('Example case 1', () => {
  const input = 16;
  const output = true;
  expect(isPowerOfFour(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 5;
  const output = false;
  expect(isPowerOfFour(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 1;
  const output = true;
  expect(isPowerOfFour(input)).toBe(output);
});
