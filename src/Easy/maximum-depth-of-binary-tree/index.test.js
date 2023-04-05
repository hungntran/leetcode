import { maxDepth } from '.';
import { arrayToTree } from '../../utils';

it('Example case 1', () => {
  const input = arrayToTree([3, 9, 20, null, null, 15, 7]);
  const output = 3;
  expect(maxDepth(input)).toBe(output);
});

it('Example case 2', () => {
  const input = arrayToTree([1, null, 2]);
  const output = 2;
  expect(maxDepth(input)).toBe(output);
});
