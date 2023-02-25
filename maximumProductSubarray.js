/*
Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length === 0) return 0;
    
    let pointer = 0;
    while (nums[pointer] === 0) pointer += 1;

    let maxProduct = Math.max(nums[0], nums[nums.length - 1]);
    
    while(pointer < nums.length - 1) {
        
        let tempProduct = nums[pointer];
        let jumpTo = nums.length - 1;
        
        if (tempProduct <= 0) jumpTo = pointer + 1;
        
        maxProduct = Math.max(maxProduct, tempProduct);

        for (let i = pointer + 1; i < nums.length; i++) {
            maxProduct = Math.max(maxProduct, nums[i]);
            
            if (nums[i] <= 0 && jumpTo === nums.length - 1) jumpTo = i + 1;
            if (nums[i] === 0) break;

            tempProduct *= nums[i];
            maxProduct = Math.max(maxProduct, tempProduct);
        }

        pointer = jumpTo;
    }

    return maxProduct;
};

console.log(maxProduct([-2,0,-1]), "0");
console.log(maxProduct([2,3,-2,4]), "6");
console.log(maxProduct([1,2,-3,2,1,3]), "6");
console.log(maxProduct([1,2,-3,2,-1,3]), "36");
console.log(maxProduct([-3,0,1,-2]), "1");
console.log(maxProduct([-1,8,9,0,1,2]), "1");
console.log(maxProduct([2,-5,-2,-4,3]), "24");
console.log(maxProduct([1,0,-1,2,3,-5,-2]), "60");
console.log(maxProduct([0,-2,-3]), "6");

/*
NOTES ON THE BETTER SOLUTION:
- Definitely on the right track, but better and easier is to keep track of the
BOTH the minimum and maximum value (since the minimum value can swap to become
the highest). For each number, store a new min and max and use those to determine
the final result.

var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    for (let i=1;i<nums.length;i++) {
        // given the new number, the new maximun can have 3 conditions
        // 1. number(+) * prevMax(+) is the largest
        // 2. number(+) it self is the largest
        // 3. number(-) * prevMin(-) is the largest 
        curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
        
        curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);

		// updating the prevMax & prevMin, these two may swap locations
        prevMax = curMax
        prevMin = curMin

        result = Math.max(curMax, result);
    }
    return result;
}

*/