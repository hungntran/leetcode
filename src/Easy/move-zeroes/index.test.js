import { moveZeroes } from '.';

it('Example case 1', () => {
  const input = [0, 1, 0, 3, 12];
  const output = [1, 3, 12, 0, 0];
  moveZeroes(input);
  expect(input).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = [0];
  const output = [0];
  moveZeroes(input);
  expect(input).toStrictEqual(output);
});
