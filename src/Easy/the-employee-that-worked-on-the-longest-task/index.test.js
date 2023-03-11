import { hardestWorker } from '.';

it('Example 1', () => {
  const n = 10;
  const logs = [
    [0, 3],
    [2, 5],
    [0, 9],
    [1, 15],
  ];
  expect(hardestWorker(n, logs)).toBe(1);
});

it('Example 2', () => {
  const n = 26;
  const logs = [
    [1, 1],
    [3, 7],
    [2, 12],
    [7, 17],
  ];
  expect(hardestWorker(n, logs)).toBe(3);
});

it('Example 3', () => {
  const n = 2;
  const logs = [
    [0, 10],
    [1, 20],
  ];
  expect(hardestWorker(n, logs)).toBe(0);
});

it('Test case 464', () => {
  const n = 70;
  const logs = [
    [36, 3],
    [1, 5],
    [12, 8],
    [25, 9],
    [53, 11],
    [29, 12],
    [52, 14],
  ];
  expect(hardestWorker(n, logs)).toBe(12);
});
