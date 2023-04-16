import { isHappy } from '.';

it('Example case 1', () => {
  const input = 19;
  const output = true;
  expect(isHappy(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 2;
  const output = false;
  expect(isHappy(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 7;
  const output = true;
  expect(isHappy(input)).toBe(output);
});
