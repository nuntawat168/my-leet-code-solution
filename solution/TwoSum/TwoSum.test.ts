import { twoSum } from './TwoSum'; // Assuming twoSum.ts is in the same directory

describe('twoSum', () => {
  it('should return indices of the two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should return indices when the numbers are in the middle of the array', () => {
    expect(twoSum([1, 2, 3, 6, 8], 9)).toEqual([3, 4]);
  });

  it('should return indices for negative numbers', () => {
    expect(twoSum([-1, -2, -3, -6, -8], -9)).toEqual([3, 4]);
  });

  it('should throw an error if no solution is found', () => {
    expect(() => twoSum([1, 2, 3], 10)).toThrow('No two sum solution');
  });

  // **New test case for large numbers**
  it('should return indices for large numbers', () => {
    const bigNum1 = 9007199254740991;  // Maximum safe integer in JavaScript (2^53 - 1)
    const bigNum2 = 9007199254740990;
    expect(twoSum([bigNum1, bigNum2, 3], bigNum1 + bigNum2)).toEqual([0, 1]);
  });
});
