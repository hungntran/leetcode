import { finalPrices } from '.';

it('Example case 1', () => {
  const input = [8, 4, 6, 2, 3];
  const output = [4, 2, 4, 2, 3];
  expect(finalPrices(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = [1, 2, 3, 4, 5];
  const output = [1, 2, 3, 4, 5];
  expect(finalPrices(input)).toStrictEqual(output);
});

it('Example case 3', () => {
  const input = [10, 1, 1, 6];
  const output = [9, 0, 1, 6];
  expect(finalPrices(input)).toStrictEqual(output);
});
