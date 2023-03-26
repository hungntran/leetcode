import { lexicalOrder } from '.';

it('Example case 1', () => {
  const input = 13;
  const output = [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(lexicalOrder(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = 2;
  const output = [1, 2];
  expect(lexicalOrder(input)).toStrictEqual(output);
});
