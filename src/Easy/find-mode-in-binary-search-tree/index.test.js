import { findMode } from '.';
import { arrayToTree } from '../../utils';

it('Example 1', () => {
  const root = arrayToTree([1, null, 2, 2]);
  expect(findMode(root)).toEqual([2]);
});

it('Example 2', () => {
  const root = arrayToTree([0]);
  expect(findMode(root)).toEqual([0]);
});

it('Testcase 6', () => {
  const root = arrayToTree([1, null, 2]);
  expect(findMode(root)).toEqual([1, 2]);
});
