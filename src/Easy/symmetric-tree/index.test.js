import { isSymmetric } from '.';
import { arrayToTree } from '../../utils';

it('Example case 1', () => {
  const input = arrayToTree([1, 2, 2, 3, 4, 4, 3]);
  const output = true;
  expect(isSymmetric(input)).toBe(output);
});

it('Example case 2', () => {
  const input = arrayToTree([1, 2, 2, null, 3, null, 3]);
  const output = false;
  expect(isSymmetric(input)).toBe(output);
});
