import { reverseBits } from '.';

it('Example case 1', () => {
  const input = 43261596;
  const output = 964176192;
  expect(reverseBits(input)).toBe(output);
});

it('Example case 2', () => {
  const input = 4294967293;
  const output = 3221225471;
  expect(reverseBits(input)).toBe(output);
});
