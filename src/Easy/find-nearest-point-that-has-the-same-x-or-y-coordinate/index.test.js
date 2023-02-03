import { nearestValidPoint } from '.';

it('Example case 1', () => {
  const points = [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
  ];
  expect(nearestValidPoint(3, 4, points)).toBe(2);
});

it('Example case 2', () => {
  const points = [[3, 4]];
  expect(nearestValidPoint(3, 4, points)).toBe(0);
});

it('Example case 3', () => {
  const points = [[2, 3]];
  expect(nearestValidPoint(3, 4, points)).toBe(-1);
});
