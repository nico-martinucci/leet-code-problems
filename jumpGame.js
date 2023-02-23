/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 
Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
*/

// recursion - works but is very slow!
// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var canJump = function(nums, idx=nums.length - 1) {
//     if (idx === 0) return true;

//     let jumpableLocs = [];

//     for (let i = idx - 1; i >= 0; i--) {
//         if (nums[i] >= idx - i) {
//             console.log(nums[i])
//             jumpableLocs.push(canJump(nums, i));
//         }
//     }

//     if (jumpableLocs.length === 0) return false;

//     return jumpableLocs.some(locs => !!locs);
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    if (nums[0] === 0 && nums.length > 1) return false;
    if (nums[0] === 0 && nums.length === 0) return true;

    let consecZeros = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            consecZeros++;
        // left off on the case where 0 is the last number in the array, but everything is otherwise true - last boolean check here isn't working
        } else if (consecZeros > 0 && nums[i] <= consecZeros && i + consecZeros < nums.length - 1) {
            return false;
        } else {
            consecZeros = 0;
        }
    }

    return true;
};

console.log(canJump([5,0,0,0,4]));