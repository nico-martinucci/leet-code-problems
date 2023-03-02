/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftP = 0;
    let rightP = nums.length - 1;
    let centerP = Math.floor(nums.length - 1);

    while (leftP <= rightP) {
        if (nums[leftP] === target) return leftP;
        if (nums[centerP] === target) return centerP;
        if (nums[rightP] === target) return rightP;

        if (target > nums[centerP]) {
            leftP = centerP + 1;
        }

        if (target < nums[centerP]) {
            rightP = centerP - 1;
        }

        centerP = Math.floor((leftP + rightP) / 2);
    }

    return -1;
};

console.log(search([-1,0,3,5,9,12], 9), "4");
console.log(search([-1,0,3,5,9,12], 2), "-1");