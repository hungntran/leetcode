import { strStr } from '.';

it('Example case 1', () => {
  const haystack = 'sadbutsad',
    needle = 'sad';
  const output = 0;
  expect(strStr(haystack, needle)).toBe(output);
});

it('Example case 2', () => {
  const haystack = 'leetcode',
    needle = 'leeto';
  const output = -1;
  expect(strStr(haystack, needle)).toBe(output);
});
