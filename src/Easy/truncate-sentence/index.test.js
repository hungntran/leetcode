import truncateSentence from '.';

it('Example 1', () => {
  const s = 'Hello how are you Contestant';
  const k = 4;
  expect(truncateSentence(s, k)).toBe('Hello how are you');
});

it('Example 2', () => {
  const s = 'What is the solution to this problem';
  const k = 4;
  expect(truncateSentence(s, k)).toBe('What is the solution');
});

it('Example 3', () => {
  const s = 'chopper is not a tanuki';
  const k = 5;
  expect(truncateSentence(s, k)).toBe('chopper is not a tanuki');
});
