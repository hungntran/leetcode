import { arraySign } from '.';

it('Example case 1', () => {
  const input = [-1, -2, -3, -4, 3, 2, 1];
  const output = 1;
  expect(arraySign(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [1, 5, 0, 2, -3];
  const output = 0;
  expect(arraySign(input)).toBe(output);
});

it('Example case 1', () => {
  const input = [-1, 1, -1, 1, -1];
  const output = -1;
  expect(arraySign(input)).toBe(output);
});
