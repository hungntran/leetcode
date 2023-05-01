import { average } from '.';

it('Example case 1', () => {
  const input = [4000, 3000, 1000, 2000];
  const output = '2500.00000';
  expect(average(input)).toBe(output);
});

it('Example case 2', () => {
  const input = [1000, 2000, 3000];
  const output = '2000.00000';
  expect(average(input)).toBe(output);
});

it('Example case 3', () => {
  const input = [
    48000, 59000, 99000, 13000, 78000, 45000, 31000, 17000, 39000, 37000, 93000,
    77000, 33000, 28000, 4000, 54000, 67000, 6000, 1000, 11000,
  ];
  const output = '41111.11111';
  expect(average(input)).toBe(output);
});
