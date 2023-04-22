import { isUgly } from '.';

it('Example case 1', () => {
  const input = 6;
  const output = true;
  expect(isUgly(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 1;
  const output = true;
  expect(isUgly(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 14;
  const output = false;
  expect(isUgly(input)).toBe(output);
});
