import { addDigits } from '.';

it('Example case 1', () => {
  const input = 38;
  const output = 2;
  expect(addDigits(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 0;
  const output = 0;
  expect(addDigits(input)).toBe(output);
});
