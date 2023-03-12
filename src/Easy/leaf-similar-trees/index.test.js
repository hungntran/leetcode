import { leafSimilar } from '.';
import { arrayToTree } from '../../utils';

it('Example case 1', () => {
  const root1 = arrayToTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 4]);
  const root2 = arrayToTree([
    3,
    5,
    1,
    6,
    7,
    4,
    2,
    null,
    null,
    null,
    null,
    null,
    null,
    9,
    8,
  ]);

  expect(leafSimilar(root1, root2)).toBe(true);
});

it('Example case 2', () => {
  const root1 = arrayToTree([1, 2, 3]);
  const root2 = arrayToTree([1, 3, 2]);

  expect(leafSimilar(root1, root2)).toBe(false);
});

it('Test case 40', () => {
  const root1 = arrayToTree([3, 5, 1, 6, 2, 9, 8, null, null, 7, 14]);
  const root2 = arrayToTree([
    3,
    5,
    1,
    6,
    71,
    4,
    2,
    null,
    null,
    null,
    null,
    null,
    null,
    9,
    8,
  ]);

  expect(leafSimilar(root1, root2)).toBe(false);
});
