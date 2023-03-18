import { buildArray } from '.';

it('Example case 1', () => {
  const input = [0, 2, 1, 5, 3, 4];
  const output = [0, 1, 2, 4, 5, 3];
  expect(buildArray(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = [5, 0, 1, 2, 3, 4];
  const output = [4, 5, 0, 1, 2, 3];
  expect(buildArray(input)).toStrictEqual(output);
});
