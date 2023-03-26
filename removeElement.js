/*
Given an integer array nums and an integer val, remove all occurrences of val in 
nums in-place. The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, you 
must instead have the result be placed in the first part of the array nums. More 
formally, if there are k elements after removing the duplicates, then the first 
k elements of nums should hold the final result. It does not matter what you 
leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the 
input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

TEST CASES:
- [1,2,2,3,4], 2 -> [1,3,4]
- [1,2,2,3,2,2,4], 2 -> [1,3,4]
- [1,4,5,7,8], 2 -> [1,4,5,7,8]
- [2,2,2,2], 2 -> []
- [], 2 -> []

APPROACH:
- iterative, checking each elem against the provided value, and removing it
    if it matches

- guard: if length of input array is 0, return the input array
- loop through the input array backwards...
    - if elem is equal to input val, splice it out
- return the input array
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) { // [3,2,2], 3 -> [2,2]
    if (nums.length === 0) return nums;

    for (let i = nums.length - 1; i >= 0; i--) { // 2 -> 0
        if (nums[i] === val) {
            nums.splice(i, 1);
        }
    }

    return nums;
};


removeElement([3, 2, 2, 3], 3);