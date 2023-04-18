import { summaryRanges } from '.';

it('Example case 1', () => {
  const input = [0, 1, 2, 4, 5, 7];
  const output = ['0->2', '4->5', '7'];
  expect(summaryRanges(input)).toStrictEqual(output);
});

it('Example case 2', () => {
  const input = [0, 2, 3, 4, 6, 8, 9];
  const output = ['0', '2->4', '6', '8->9'];
  expect(summaryRanges(input)).toStrictEqual(output);
});
