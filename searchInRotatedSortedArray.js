/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.


Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
 

Constraints:

1 <= nums.length <= 5000
-104 <= nums[i] <= 104
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-104 <= target <= 104
*/

/*
    beats 99.3% of other solutions!!
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    function shiftPointersRight() {
        leftP = centerP + 1;
        centerP = Math.floor((leftP + rightP) / 2);
    }

    function shiftPointersLeft() {
        rightP = centerP - 1;
        centerP = Math.floor((leftP + rightP) / 2);
    }

    let leftP = 0;
    let rightP = nums.length - 1;
    let centerP = Math.floor((leftP + rightP) / 2);
    debugger;
    while (leftP <= rightP) {    
        if (nums[centerP] === target) {
            return centerP;
        }

        // if subarray has a normal left and the target is in it...
        if (nums[leftP] < nums[centerP] && (nums[leftP] <= target && target < nums[centerP])) {
            shiftPointersLeft();
        // if subarray has a normal right and the target is in it...
        } else if (nums[rightP] > nums[centerP] && (nums[rightP] >= target && target > nums[centerP])) {
            shiftPointersRight();
        // if subarray has an ABNORMAL left and the target is in it...
        } else if (nums[leftP] > nums[centerP] && (nums[leftP] <= target || target < nums[centerP])) {
            shiftPointersLeft();
        // if subarray has an ABNORMAL right and the target is in it...
        } else if ((nums[rightP] >= target || target > nums[centerP])) {
            shiftPointersRight();
        // if none of the above apply, the value is not in nums
        } else {
            return -1;
        }
    }

    return -1;
};

console.log(search([1], 0), "-1")
console.log(search([4,5,6,7,0,1,2], 3), "-1")
console.log(search([4,5,6,7,0,1,2], 0), "4")

console.log(search([3,4,5,6,7,8,9], 3), "0")
console.log(search([3,4,5,6,7,8,9], 4), "1")
console.log(search([3,4,5,6,7,8,9], 6), "3")
console.log(search([3,4,5,6,7,8,9], 8), "5")
console.log(search([3,4,5,6,7,8,9], 9), "6")
console.log(search([3,4,5,6,7,8,9], 0), "-1")

console.log(search([8,9,3,4,5,6,7], 8), "0")
console.log(search([8,9,3,4,5,6,7], 9), "1")
console.log(search([8,9,3,4,5,6,7], 4), "3")
console.log(search([8,9,3,4,5,6,7], 6), "5")
console.log(search([8,9,3,4,5,6,7], 7), "6")
console.log(search([8,9,3,4,5,6,7], 0), "-1")

console.log(search([5,6,7,8,9,3,4], 5), "0")
console.log(search([5,6,7,8,9,3,4], 6), "1")
console.log(search([5,6,7,8,9,3,4], 8), "3")
console.log(search([5,6,7,8,9,3,4], 3), "5")
console.log(search([5,6,7,8,9,3,4], 4), "6")
console.log(search([5,6,7,8,9,3,4], 0), "-1")