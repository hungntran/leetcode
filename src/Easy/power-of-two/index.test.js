import { isPowerOfTwo } from '.';

it('Example case 1', () => {
  const input = 1;
  const output = true;
  expect(isPowerOfTwo(input)).toBe(output);
});

it('Example case 1', () => {
  const input = 16;
  const output = true;
  expect(isPowerOfTwo(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 3;
  const output = false;
  expect(isPowerOfTwo(input)).toBe(output);
});
