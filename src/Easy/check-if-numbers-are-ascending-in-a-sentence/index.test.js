import { areNumbersAscending } from '.';

it('Example case 1', () => {
  const s = '1 box has 3 blue 4 red 6 green and 12 yellow marbles';
  expect(areNumbersAscending(s)).toBe(true);
});

it('Example case 2', () => {
  const s = 'hello world 5 x 5';
  expect(areNumbersAscending(s)).toBe(false);
});

it('Example case 3', () => {
  const s =
    'sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s';
  expect(areNumbersAscending(s)).toBe(false);
});
