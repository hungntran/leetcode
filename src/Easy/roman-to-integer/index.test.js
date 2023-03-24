import { romanToInt } from '.';

it('Example case 1', () => {
  const input = 'III';
  const output = 3;
  expect(romanToInt(input)).toBe(output);
});
it('Example case 1', () => {
  const input = 'LVIII';
  const output = 58;
  expect(romanToInt(input)).toBe(output);
});
it('Example case 3', () => {
  const input = 'MCMXCIV';
  const output = 1994;
  expect(romanToInt(input)).toBe(output);
});
