import { majorityElement } from '.';

it('Example case 1', () => {
  const input = [3, 2, 3];
  const output = 3;
  expect(majorityElement(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [2, 2, 1, 1, 1, 2, 2];
  const output = 2;
  expect(majorityElement(input)).toBe(output);
});
