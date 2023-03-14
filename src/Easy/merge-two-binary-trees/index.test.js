import { mergeTrees } from '.';
import { arrayToTree, treeToArray } from '../../utils';

it('Example case 1', () => {
  const root1 = arrayToTree([1, 3, 2, 5]);
  const root2 = arrayToTree([2, 1, 3, null, 4, null, 7]);
  const res = mergeTrees(root1, root2);
  expect(treeToArray(res)).toMatchObject([3, 4, 5, 5, 4, null, 7]);
});

it('Example case 2', () => {
  const root1 = arrayToTree([1]);
  const root2 = arrayToTree([1, 2]);
  const res = mergeTrees(root1, root2);
  expect(treeToArray(res)).toMatchObject([2, 2]);
});
