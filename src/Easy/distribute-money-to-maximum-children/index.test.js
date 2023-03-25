import { distMoney } from '.';

it('Example case 1', () => {
  const money = 20,
    children = 3;
  const output = 1;
  expect(distMoney(money, children)).toBe(output);
});

it('Example case 2', () => {
  const money = 16,
    children = 2;
  const output = 2;
  expect(distMoney(money, children)).toBe(output);
});
