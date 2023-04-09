import { generate } from '.';

it('Example case 1', () => {
  const input = 5;
  const output = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
  expect(generate(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = 1;
  const output = [[1]];
  expect(generate(input)).toStrictEqual(output);
});
