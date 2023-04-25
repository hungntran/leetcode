import { canWinNim } from '.';

it('Example case 1', () => {
  const input = 4;
  const output = false;
  expect(canWinNim(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 1;
  const output = true;
  expect(canWinNim(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 2;
  const output = true;
  expect(canWinNim(input)).toBe(output);
});
