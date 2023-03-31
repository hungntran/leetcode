import { lengthOfLastWord } from '.';

it('Example case 1', () => {
  const input = 'Hello World';
  const output = 5;
  expect(lengthOfLastWord(input)).toBe(output);
});

it('Example case 2', () => {
  const input = '   fly me   to   the moon  ';
  const output = 4;
  expect(lengthOfLastWord(input)).toBe(output);
});

it('Example case 3', () => {
  const input = 'luffy is still joyboy';
  const output = 6;
  expect(lengthOfLastWord(input)).toBe(output);
});
