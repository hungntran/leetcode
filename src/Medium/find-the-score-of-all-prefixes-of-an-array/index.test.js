import { findPrefixScore } from '.';

it('Example case 1', () => {
  const input = [2, 3, 7, 5, 10];
  const output = [4, 10, 24, 36, 56];
  expect(findPrefixScore(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = [1, 1, 2, 4, 8, 16];
  const output = [2, 4, 8, 16, 32, 64];
  expect(findPrefixScore(input)).toStrictEqual(output);
});
