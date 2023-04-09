import { getRow } from '.';

it('Example case 1', () => {
  const input = 3;
  const output = [1, 3, 3, 1];
  expect(getRow(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = 0;
  const output = [1];
  expect(getRow(input)).toStrictEqual(output);
});

it('Example case 3', () => {
  const input = 1;
  const output = [1, 1];
  expect(getRow(input)).toStrictEqual(output);
});
