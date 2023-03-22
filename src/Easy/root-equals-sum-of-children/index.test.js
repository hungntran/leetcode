import { checkTree } from '.';
import { arrayToTree } from '../../utils';

it('Example case 1', () => {
  const input = arrayToTree([10, 4, 6]);
  const output = true;
  expect(checkTree(input)).toBe(output);
});

it('Example case 2', () => {
  const input = arrayToTree([5, 3, 1]);
  const output = false;
  expect(checkTree(input)).toBe(output);
});
