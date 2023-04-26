import { countBits } from '.';

it('Example case 1', () => {
  const input = 2;
  const output = [0, 1, 1];
  expect(countBits(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = 5;
  const output = [0, 1, 1, 2, 1, 2];
  expect(countBits(input)).toStrictEqual(output);
});
