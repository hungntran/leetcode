import { commonChars } from '.';

it('Example case 1', () => {
  const input = ['bella', 'label', 'roller'];
  expect(commonChars(input).sort().join('')).toBe(
    ['e', 'l', 'l'].sort().join('')
  );
});

it('Example case 2', () => {
  const input = ['cool', 'lock', 'cook'];
  expect(commonChars(input).sort().join('')).toBe(['c', 'o'].sort().join(''));
});
