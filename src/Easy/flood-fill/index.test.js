import { floodFill } from '.';

it('Example case 1', () => {
  const image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    sr = 1,
    sc = 1,
    color = 2;
  expect(floodFill(image, sr, sc, color)).toStrictEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]);
});

it('Example case 2', () => {
  const image = [
      [0, 0, 0],
      [0, 0, 0],
    ],
    sr = 0,
    sc = 0,
    color = 0;
  expect(floodFill(image, sr, sc, color)).toStrictEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
});
