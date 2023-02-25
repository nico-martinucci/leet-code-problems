/*
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:
                       X      X     
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 
[-5, -3, -1, -5, -2]

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    let maxSum = Math.max(nums[leftPointer], nums[rightPointer]);
    let change = true;

    while(change) {
        console.log("top of main while loop")
        change = false;
        
        while (nums[leftPointer] <= 0 && leftPointer < nums.length - 1) {
            leftPointer += 1;
            maxSum = Math.max(maxSum, nums[leftPointer]);
            change = true;
        }
        
        while (nums[rightPointer] <= 0 && rightPointer > 0) {
            rightPointer -= 1;
            maxSum = Math.max(maxSum, nums[rightPointer]);
            change = true;
        }

        let leftSum = nums[leftPointer];
        let tempLeft = leftPointer + 1;
        
        while (tempLeft <= rightPointer) {
            leftSum += nums[tempLeft];
            maxSum = Math.max(maxSum, leftSum);
            
            if (leftSum <= 0) {
                leftPointer = tempLeft + 1;
                change = true;
                break;
            }

            tempLeft += 1;
        }
        
        let rightSum = nums[rightPointer];
        let tempRight = rightPointer - 1;
        
        while (tempRight >= leftPointer) {
            rightSum += nums[tempRight];
            maxSum = Math.max(maxSum, rightSum);
            
            if (rightSum <= 0) {
                rightPointer = tempRight - 1;
                change = true;
                break;
            }

            tempRight -= 1;
        }
    }

    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), "6") // [4,-1,2,1]
console.log(maxSubArray([1]), "1")
console.log(maxSubArray([5,4,-1,7,8]), "23")
console.log(maxSubArray([1,2,3,4,-6,-7,-8,-9,1]), "10")
console.log(maxSubArray([-2,1]), "1")
console.log(maxSubArray([-2,1,0]), "1")


// Old O(n^2) solution.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let subTotal = 0;

    for (let i = 0; i < nums.length; i++) {
        subTotal = 0;

        for (let j = i; j < nums.length; j++) {
            subTotal += nums[j];
            max = Math.max(subTotal, max);
        }
    }

    return max;
};