/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

// TODO: Figure out updating to O(1) space complexity - can probably do the 
// operations in-place in the output array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftProds = [1];
    let rightProds = [1];
    let res = [];

    for (let i = 1; i < nums.length; i++) {
        leftProds.push(leftProds[i - 1] * nums[i - 1]);
        rightProds.push(rightProds[i - 1] * nums[nums.length - i]);
    }

    for (let i = 0; i < nums.length; i++) {
        res.push(leftProds[i] * rightProds[rightProds.length - i - 1]);
    }

    return res;
};