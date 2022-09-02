import { dayOfProgrammer } from '.';

test('Sample case 0', () => {
  expect(dayOfProgrammer(2017)).toBe('13.09.2017');
});

test('Sample case 1', () => {
  expect(dayOfProgrammer(2016)).toBe('12.09.2016');
});

test('Sample case 2', () => {
  expect(dayOfProgrammer(1800)).toBe('12.09.1800');
});

// Unlock
test('Test case 59', () => {
  expect(dayOfProgrammer(1918)).toBe('26.09.1918');
});
