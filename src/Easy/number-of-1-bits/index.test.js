import { hammingWeight } from '.';

it('Example case 1', () => {
  const input = 11;
  const output = 3;
  expect(hammingWeight(input)).toBe(output);
});
it('Example case 2', () => {
  const input = 128;
  const output = 1;
  expect(hammingWeight(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 4294967293;
  const output = 31;
  expect(hammingWeight(input)).toBe(output);
});
