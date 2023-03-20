import { thirdMax } from '.';

it('Example case 1', () => {
  const input = [3, 2, 1];
  const output = 1;
  expect(thirdMax(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [1, 2];
  const output = 2;
  expect(thirdMax(input)).toBe(output);
});

it('Example case 3', () => {
  const input = [2, 2, 3, 1];
  const output = 1;
  expect(thirdMax(input)).toBe(output);
});

it('Test case 18', () => {
  const input = [1, 1, 2];
  const output = 2;
  expect(thirdMax(input)).toBe(output);
});

it('Test case 24', () => {
  const input = [5, 2, 4, 1, 3, 6, 0];
  const output = 4;
  expect(thirdMax(input)).toBe(output);
});

it('Test case 33', () => {
  const input = [3, 3, 4, 3, 4, 3, 0, 3, 3];
  const output = 0;
  expect(thirdMax(input)).toBe(output);
});
