import { minimumAbsoluteDifference } from '.';

test('Sample case', () => {
  const arr = [3, -7, 0];
  expect(minimumAbsoluteDifference(arr)).toBe(3);
});

test('Sample case 1', () => {
  const arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];
  expect(minimumAbsoluteDifference(arr)).toBe(1);
});

test('Sample case 2', () => {
  const arr = [1, -3, 71, 68, 17];
  expect(minimumAbsoluteDifference(arr)).toBe(3);
});
