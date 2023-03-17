import { containsDuplicate } from '.';

it('Example case 1', () => {
  const input = [1, 2, 3, 1];
  expect(containsDuplicate(input)).toBe(true);
});

it('Example case 2', () => {
  const input = [1, 2, 3, 4];
  expect(containsDuplicate(input)).toBe(false);
});

it('Example case 3', () => {
  const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
  expect(containsDuplicate(input)).toBe(true);
});
