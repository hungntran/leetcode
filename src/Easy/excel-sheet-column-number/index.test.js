import { titleToNumber } from '.';

it('Example case 1', () => {
  const input = 'A';
  const output = 1;
  expect(titleToNumber(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 'AB';
  const output = 28;
  expect(titleToNumber(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 'ZY';
  const output = 701;
  expect(titleToNumber(input)).toBe(output);
});
