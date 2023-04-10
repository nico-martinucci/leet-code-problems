/*
Given an unsorted integer array nums, return the smallest missing positive 
integer.

You must implement an algorithm that runs in O(n) time and uses constant extra 
space.

NOTES:
- 0 doesn't count
- O(n) runtime and O(1) space
- cannot assume sorted array
- iterate over the entire array
- calculate the sum of the array (ignoring negatives), and store the high and low values
- if low is greater than 1, return 1
- otherwise calculate the theoretical sum if all values were present (using high/low)
- return the difference between the two, OR if 0, return high + 1

TEST CASES:
- [1,2,4] -> [3]
- [1,2,3] -> [4]
- [2,3,4] -> [1]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) { // [1,-2,2,3] -> 4
    let sum = 0; // 6
    let max = -Infinity; // 3
    let min = Infinity; // 1

    for (let num of nums) { // 4 of [1,-2,2,3]
        if (num > 0) {
            sum += num;
            max = Math.max(max, num);
            min = Math.min(min, num);
        }
    }

    if (min > 1) return 1;

    let possibleSum = (max * (max + 1)) / 2; // 6

    if (possibleSum - sum > 0) return possibleSum - sum; // 3

    return max + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) { // [1,-2,2,3] -> 4
    let numsSet = new Set(nums);
    let val = 1;

    while (true) {
        if (!numsSet.has(val)) return val;
        val += 1;
    }
};