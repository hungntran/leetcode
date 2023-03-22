import { passThePillow } from '.';

it('Example case 1', () => {
  const n = 4,
    time = 5;
  const output = 2;
  expect(passThePillow(n, time)).toBe(output);
});

it('Example case 2', () => {
  const n = 3,
    time = 2;
  const output = 3;
  expect(passThePillow(n, time)).toBe(output);
});

it('Test case 42', () => {
  const n = 20,
    time = 9;
  const output = 10;
  expect(passThePillow(n, time)).toBe(output);
});
