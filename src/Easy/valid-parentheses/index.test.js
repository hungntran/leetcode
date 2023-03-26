import { isValid } from '.';

it('Example case 1', () => {
  const input = '()';
  const output = true;
  expect(isValid(input)).toBe(output);
});

it('Example case 2', () => {
  const input = '()[]{}';
  const output = true;
  expect(isValid(input)).toBe(output);
});

it('Example case 3', () => {
  const input = '(]';
  const output = false;
  expect(isValid(input)).toBe(output);
});

it('Example case 4', () => {
  const input = '[';
  const output = false;
  expect(isValid(input)).toBe(output);
});
