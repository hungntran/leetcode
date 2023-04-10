import { singleNumber } from '.';

it('Example case 1', () => {
  const input = [2, 2, 1];
  const output = 1;
  expect(singleNumber(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [4, 1, 2, 1, 2];
  const output = 4;
  expect(singleNumber(input)).toBe(output);
});

it('Example case 3', () => {
  const input = [1];
  const output = 1;
  expect(singleNumber(input)).toBe(output);
});
