import { pageCount } from '.';

test('Test case 0', () => {
  expect(pageCount(6, 2)).toBe(1);
});

test('Test case 1', () => {
  expect(pageCount(5, 4)).toBe(0);
});

test('Test case 26', () => {
  expect(pageCount(6, 5)).toBe(1);
});
