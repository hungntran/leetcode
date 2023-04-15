import { findColumnWidth } from '.';

it('Example case 1', () => {
  const input = [[1], [22], [333]];
  const output = [3];
  expect(findColumnWidth(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = [
    [-15, 1, 3],
    [15, 7, 12],
    [5, 6, -2],
  ];
  const output = [3, 1, 2];
  expect(findColumnWidth(input)).toStrictEqual(output);
});
