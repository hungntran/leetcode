import { isAnagram } from '.';

it('Example case 1', () => {
  const s = 'anagram',
    t = 'nagaram';
  expect(isAnagram(s, t)).toBe(true);
});

it('Example case 2', () => {
  const s = 'rat',
    t = 'car';
  expect(isAnagram(s, t)).toBe(false);
});

it('Test case 34', () => {
  const s = 'ab',
    t = 'a';
  expect(isAnagram(s, t)).toBe(false);
});
