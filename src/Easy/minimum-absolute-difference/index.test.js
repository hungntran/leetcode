import { minimumAbsDifference } from '.';

it('Example case 1', () => {
  const input = [4, 2, 1, 3];
  const output = [
    [1, 2],
    [2, 3],
    [3, 4],
  ];
  expect(minimumAbsDifference(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = [1, 3, 6, 10, 15];
  const output = [[1, 3]];
  expect(minimumAbsDifference(input)).toStrictEqual(output);
});

it('Example case 3', () => {
  const input = [3, 8, -10, 23, 19, -4, -14, 27];
  const output = [
    [-14, -10],
    [19, 23],
    [23, 27],
  ];
  expect(minimumAbsDifference(input)).toStrictEqual(output);
});
