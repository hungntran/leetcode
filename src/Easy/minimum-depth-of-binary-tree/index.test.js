import { minDepth } from '.';
import { arrayToTree } from '../../utils';

it('Example case 1', () => {
  const input = arrayToTree([3, 9, 20, null, null, 15, 7]);
  const output = 2;
  expect(minDepth(input)).toBe(output);
});
