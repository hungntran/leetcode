import { plusOne } from '.';

it('Example case 1', () => {
  const input = [1, 2, 3];
  const output = [1, 2, 4];
  expect(plusOne(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = [4, 3, 2, 1];
  const output = [4, 3, 2, 2];
  expect(plusOne(input)).toStrictEqual(output);
});

it('Example case 3', () => {
  const input = [9];
  const output = [1, 0];
  expect(plusOne(input)).toStrictEqual(output);
});

it('Test case 71', () => {
  const input = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
  const output = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4];
  expect(plusOne(input)).toStrictEqual(output);
});
