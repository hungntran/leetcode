import { kthDistinct } from '.';

it('Example case 1', () => {
  const arr = ['d', 'b', 'c', 'b', 'c', 'a'],
    k = 2;
  expect(kthDistinct(arr, k)).toBe('a');
});

it('Example case 2', () => {
  const arr = ['aaa', 'aa', 'a'],
    k = 1;
  expect(kthDistinct(arr, k)).toBe('aaa');
});

it('Example case 2', () => {
  const arr = ['a', 'b', 'a'],
    k = 3;
  expect(kthDistinct(arr, k)).toBe('');
});
