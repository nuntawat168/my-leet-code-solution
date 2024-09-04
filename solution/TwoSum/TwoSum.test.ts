import { twoSum } from './TwoSum';

describe('Two Sum Problems', () => {
  it('should return indices of the two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('should return indices when the numbers are in the middle of the array', () => {
    expect(twoSum([1, 2, 3, 6, 8], 9)).toEqual([2, 3]);
  });

  it('should return indices for negative numbers', () => {
    expect(twoSum([-1, -2, -3, -6, -8], -9)).toEqual([2, 3]);
  });

  it('should throw an error if no solution is found', () => {
    expect(() => twoSum([1, 2, 3], 10)).toThrow('No two sum solution');
  });

  it('should return indices for large numbers', () => {
    const bigNum1 = 4503599627370497; 
    const bigNum2 = 4503599627370493;
    expect(twoSum([bigNum1, bigNum2, 3], bigNum1 + bigNum2)).toEqual([0, 1]);
  });
});
