"use strict";
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (hashMap[diff] === undefined) {
            hashMap[nums[i]] = i;
        }
        else {
            return [hashMap[diff], i];
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
