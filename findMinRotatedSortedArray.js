/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:          
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 

Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // O(log n) time complexity suggests a binary search variation
    // we don't know how many times the input has been rotated, so can't rely
    //      on just adjusting our starting point
    // if center is *ever* greater than right, min will be in the right half
    //      of the current view
    // if center is *ever* less than left, min will be in the left half of the
    //      current view (or center!)
    // if left < center < right, it's a normal binary search
    //      and i *think* that in this case left will always our number??

    let leftP = 0;
    let rightP = nums.length - 1;
    let centerP = Math.floor(nums.length / 2);
    let minVal = Math.min(nums[leftP], nums[rightP], nums[centerP]);

    debugger;
    while (leftP <= rightP) {
        // if num at center is greater than num at right -> shift pointers right
        // if num at center is less than num at left -> shift pointers left
        if (nums[centerP] > nums[rightP]) {
            leftP = centerP + 1;
            centerP = Math.floor((rightP + leftP) / 2);
            minVal = Math.min(minVal, nums[leftP], nums[centerP]);
        } else if (nums[centerP] < nums[leftP]) {
            rightP = centerP - 1;
            centerP = Math.floor((rightP + leftP) / 2);
            minVal = Math.min(minVal, nums[rightP], nums[centerP]);
        } else {
            return minVal;
        }

        // check for any new mins
    }

    return minVal;
};

//                   X     X     X            
console.log(findMin([0,1,2,4,5,6,7]), "0");
//                   X     X     X            
console.log(findMin([7,0,1,2,4,5,6]), "0");
//                   X     X     X            
console.log(findMin([6,7,0,1,2,4,5]), "0");
//                   X     X     X            
console.log(findMin([5,6,7,0,1,2,4]), "0");
//                   X     X     X            
console.log(findMin([4,5,6,7,0,1,2]), "0");
//                   X     X     X            
console.log(findMin([2,4,5,6,7,0,1]), "0");
//                   X     X     X            
console.log(findMin([1,2,4,5,6,7,0]), "0");

/*
NOTES: good job on this one! binary search is definitely the way to go; 
there's a recursive version as well.
*/