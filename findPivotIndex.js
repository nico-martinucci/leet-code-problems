/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the 
left of the index is equal to the sum of all the numbers strictly to the index's 
right.

If the index is on the left edge of the array, then the left sum is 0 because 
there are no elements to the left. This also applies to the right edge of the 
array.

Return the leftmost pivot index. If no such index exists, return -1.


Example 1:
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Example 2:
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Example 3:
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000

NOTES:
- sum below i=0 / above i=len-1 is 0
- not guaranteed to find a pivot; return -1 if not found
- array of length 1? return 0
- don't count the value of pivot in either sum
- iterate through the array, storing the sum-so-far for each index 
    - [2,2,2,2,2] --> { 0: 0, 1: 2, 2: 4, 3: 6, 4: 8, Tot: 10 }
    - [2,1,-1] --> { 0: 0, 1: 2, 2: 3, Tot: 2 }
- once we know the total, can loop through object keys, calculating if the total
    less the value at this index divided by 2 is the same as the value

APPROACH:
- create an object
- create a running sum variable
- loop through the array
    - at each index, store the sum so far and THEN increase the sum
- loop through keys of the object
    - for each, check if running sum less val at this index in arr divided by 2
        is equal to the val at this key in the object; return key if so
- otherwise, return -1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let sums = {};
    let runningSum = 0;

    for (let i = 0; i < nums.length; i++) {
        sums[i] = runningSum;
        runningSum += nums[i];
    }

    for (let idx in sums) {
        if ((runningSum - nums[idx]) / 2 === sums[idx]) {
            return +idx;
        }
    }

    return -1;
};