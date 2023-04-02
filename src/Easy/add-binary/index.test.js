import { addBinary } from '.';

it('Example case 1', () => {
  const a = '11',
    b = '1';
  const output = '100';
  expect(addBinary(a, b)).toBe(output);
});

it('Example case 2', () => {
  const a = '1010',
    b = '1011';
  const output = '10101';
  expect(addBinary(a, b)).toBe(output);
});

it('Test case 97', () => {
  const a = '0',
    b = '0';
  const output = '0';
  expect(addBinary(a, b)).toBe(output);
});
