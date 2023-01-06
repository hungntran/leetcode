import { sortArrayByParity } from '.';

it('Example case 1', () => {
  const input = [3, 1, 2, 4];
  expect(sortArrayByParity(input)).toEqual([2, 4, 3, 1]);
});

it('Example case 2', () => {
  const input = [0];
  expect(sortArrayByParity(input)).toEqual([0]);
});
