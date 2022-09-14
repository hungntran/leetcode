import { matchingStrings } from '.';

test('Test case 0', () => {
  expect(
    matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])
  ).toEqual([2, 1, 0]);
});

test('Test case 1', () => {
  expect(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh'])).toEqual([
    1, 0, 1,
  ]);
});

test('Test case 2', () => {
  expect(
    matchingStrings(
      [
        'abcde',
        'sdaklfj',
        'asdjf',
        'na',
        'basdn',
        'sdaklfj',
        'asdjf',
        'na',
        'asdjf',
        'na',
        'basdn',
        'sdaklfj',
        'asdjf',
      ],
      ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']
    )
  ).toEqual([1, 3, 4, 3, 2]);
});
