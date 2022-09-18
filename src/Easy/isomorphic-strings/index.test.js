import { isIsomorphic } from '.';

test('Test case 1', () => {
  expect(isIsomorphic('egg', 'add')).toBe(true);
});

test('Test case 2', () => {
  expect(isIsomorphic('foo', 'bar')).toBe(false);
});

test('Test case 3', () => {
  expect(isIsomorphic('paper', 'title')).toBe(true);
});

test('Test case 4', () => {
  expect(isIsomorphic('badc', 'baba')).toBe(false);
});
