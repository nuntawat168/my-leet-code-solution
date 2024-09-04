/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums: number[], target: number): number[] {
    const hashMap: {[key: number]: number} = {};
    for( let i = 0; i < nums.length; i++) {  
        const diff = target - nums[i];
        if (hashMap[diff] === undefined) {
            hashMap[nums[i]] = i;
        } else {
            return [hashMap[diff], i];
        }
    }

    throw new Error('No two sum solution')
};