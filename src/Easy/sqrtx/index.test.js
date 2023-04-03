import { mySqrt } from '.';

it('Example case 1', () => {
  const input = 4;
  const output = 2;
  expect(mySqrt(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 8;
  const output = 2;
  expect(mySqrt(input)).toBe(output);
});
