import { convertToTitle } from '.';

it('Example case 1', () => {
  const input = 1;
  const output = 'A';
  expect(convertToTitle(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 28;
  const output = 'AB';
  expect(convertToTitle(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 701;
  const output = 'ZY';
  expect(convertToTitle(input)).toBe(output);
});
