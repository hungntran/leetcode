import { wordPattern } from '.';

it('Example case 1', () => {
  const pattern = 'abba',
    s = 'dog cat cat dog';
  const output = true;
  expect(wordPattern(pattern, s)).toBe(output);
});

it('Example case 2', () => {
  const pattern = 'abba',
    s = 'dog cat cat fish';
  const output = false;
  expect(wordPattern(pattern, s)).toBe(output);
});

it('Example case 3', () => {
  const pattern = 'aaaa',
    s = 'dog cat cat dog';
  const output = false;
  expect(wordPattern(pattern, s)).toBe(output);
});

it('Example case 4', () => {
  const pattern = 'abba',
    s = 'dog dog dog dog';
  const output = false;
  expect(wordPattern(pattern, s)).toBe(output);
});

it('Example case 5', () => {
  const pattern = 'abc',
    s = 'b c a';
  const output = true;
  expect(wordPattern(pattern, s)).toBe(output);
});

it('Example case 6', () => {
  const pattern = 'abba',
    s = 'dog constructor constructor dog';
  const output = true;
  expect(wordPattern(pattern, s)).toBe(output);
});
