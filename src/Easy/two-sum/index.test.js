import { twoSum } from '.';

describe('Two Sum', () => {
  it('Example 1', () => {
    const array = [2, 7, 11, 15];
    const k = 9;
    expect(twoSum(array, k)).toEqual([0, 1]);
  });

  it('Example 2', () => {
    const array = [3, 2, 4];
    const k = 6;
    expect(twoSum(array, k)).toEqual([1, 2]);
  });

  it('Example 3', () => {
    const array = [3, 3];
    const k = 6;
    expect(twoSum(array, k)).toEqual([0, 1]);
  });
});
