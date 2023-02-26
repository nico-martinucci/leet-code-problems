/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function(nums) {
//     let sumMemo = {};
//     let count = {};
//     let output = {};

//     for (let i = 0; i < nums.length; i++) {
//         count[nums[i]] = count[nums[i]] ? count[nums[i]] + 1 : 1;

//         let sumCheck = sumMemo[0 - nums[i]];

//         if (sumCheck) {
//             for (let key in sumCheck) {
//                 let sumNums = [
//                     nums[i].toString(), 
//                     key.toString(), 
//                     sumCheck[key].toString()
//                 ].sort();

//                 let sendOutput = true;
//                 if (sumNums[0] === sumNums[1] || sumNums[1] === sumNums[2] || sumNums[2] === sumNums[0]) {
//                     let sumCount = {}
//                     for (let num of sumNums) {
//                         sumCount[num] = sumCount[num] ? sumCount[num] + 1 : 1
//                         if (sumCount[num] > count[num]) sendOutput = false;
//                     }
//                 }


//                 if (sendOutput) output[sumNums.join("")] = sumNums;
//             }
//         }

//         for (let j = i; j < nums.length; j++) {
//             if (i === j) continue;

//             let iVal = nums[i];
//             let jVal = nums[j];
//             let currSum = iVal + jVal;

//             if (sumMemo[currSum]) {
//                 if (!sumMemo[currSum][iVal] && !sumMemo[currSum][jVal]) {
//                     sumMemo[currSum][iVal] = jVal;
//                 }
//             } else {
//                 sumMemo[currSum] = {[iVal]: jVal};
//             }
//         }
//     }

//     return Object.values(output);
// };


/*
NOTES:
- this failed on the below input, which is nearly impossible to debug. I think
this is a very close solution, but can also tell that i've gone off in a
direction that maybe wasn't the most helpful.
*/

/*
OUTPUT

[
    [-13,5,8],[-13,0,13],[-13,1,12],[-2,-3,5],[-10,-2,12],[-11,-2,13],[-11,5,6],
    [-1,-11,12],[-1,-4,5],[-1,-12,13],[-1,-13,14],[-1,-2,3],[-3,-9,12],
    [-10,-3,13],[-11,-3,14],[-1,-3,4],[-5,0,5],[-12,0,12],[-2,0,2],[-11,0,11],
    [-1,0,1],[-3,0,3],[-3,-3,6],[-7,0,7],[-7,2,5],[-5,-7,12],[-6,-7,13],
    [-2,-7,9],[-1,-7,8],[-3,-7,10],[-7,-7,14],[-5,-8,13],[-2,-5,7],[-1,-5,6],
    [-3,-5,8],[-15,10,5],[-15,12,3],[-15,13,2],[-2,-2,4],[-14,0,14],[-12,-2,14],
    [-5,-9,14],[-15,1,14],[-6,0,6],[-13,6,7],[-2,-4,6],[-7,1,6],[-15,6,9],
    [-10,5,5],[-14,5,9],[-14,6,8],[-14,12,2],[-14,1,13],[-5,-5,10],[-8,3,5],
    [-9,3,6],[-13,10,3],[-11,3,8],[-7,3,4],[-5,2,3],[-8,0,8],[-8,2,6],
    [-4,-8,12],[-6,-8,14],[-2,-8,10],[-1,-8,9],[-3,-8,11],[-10,0,10],[-10,3,7],
    [-10,4,6],[-10,-4,14],[-1,-10,11],[-2,-9,11],[-4,-7,11],[-5,-6,11],[-6,1,5],
    [-2,-6,8],[-1,-6,7],[-3,-6,9],[-11,2,9],[-3,1,2],[-10,2,8],[-6,2,4],
    [-6,3,3],[-4,2,2],[-9,2,7],[-12,5,7],[-11,4,7],[-3,-4,7],[-15,7,8],[-8,1,7],
    [-14,7,7],[-12,10,2],[-12,3,9],[-12,1,11],[-1,-1,2],[-11,1,10],[-1,-9,10],
    [-14,10,4],[-4,-6,10],[-9,0,9],[-9,4,5],[-4,-9,13],[-12,4,8],[-9,1,8],
    [-6,-6,12],[-4,0,4],[-13,4,9],[-5,1,4],[-4,1,3],[-4,-5,9],[-4,-4,8],[-10,1,9],
    [-8,4,4],[-2,1,1]
]


EXPECTED

[
    [-15,1,14],[-15,2,13],[-15,3,12],[-15,4,11],[-15,5,10],[-15,6,9],[-15,7,8],
    [-14,0,14],[-14,1,13],[-14,2,12],[-14,3,11],[-14,4,10],[-14,5,9],[-14,6,8],
    [-14,7,7],[-13,-1,14],[-13,0,13],[-13,1,12],[-13,2,11],[-13,3,10],[-13,4,9],
    [-13,5,8],[-13,6,7],[-12,-2,14],[-12,-1,13],[-12,0,12],[-12,1,11],
    [-12,2,10],[-12,3,9],[-12,4,8],[-12,5,7],[-11,-3,14],[-11,-2,13],
    [-11,-1,12],[-11,0,11],[-11,1,10],[-11,2,9],[-11,3,8],[-11,4,7],[-11,5,6],
    [-10,-4,14],[-10,-3,13],[-10,-2,12],[-10,-1,11],[-10,0,10],[-10,1,9],
    [-10,2,8],[-10,3,7],[-10,4,6],[-10,5,5],[-9,-5,14],[-9,-4,13],[-9,-3,12],
    [-9,-2,11],[-9,-1,10],[-9,0,9],[-9,1,8],[-9,2,7],[-9,3,6],[-9,4,5],
    [-8,-6,14],[-8,-5,13],[-8,-4,12],[-8,-3,11],[-8,-2,10],[-8,-1,9],[-8,0,8],
    [-8,1,7],[-8,2,6],[-8,3,5],[-8,4,4],[-7,-7,14],[-7,-6,13],[-7,-5,12],
    [-7,-4,11],[-7,-3,10],[-7,-2,9],[-7,-1,8],[-7,0,7],[-7,1,6],[-7,2,5],
    [-7,3,4],[-6,-6,12],[-6,-5,11],[-6,-4,10],[-6,-3,9],[-6,-2,8],[-6,-1,7],
    [-6,0,6],[-6,1,5],[-6,2,4],[-6,3,3],[-5,-5,10],[-5,-4,9],[-5,-3,8],
    [-5,-2,7],[-5,-1,6],[-5,0,5],[-5,1,4],[-5,2,3],[-4,-4,8],[-4,-3,7],
    [-4,-2,6],[-4,-1,5],[-4,0,4],[-4,1,3],[-4,2,2],[-3,-3,6],[-3,-2,5],
    [-3,-1,4],[-3,0,3],[-3,1,2],[-2,-2,4],[-2,-1,3],[-2,0,2],[-2,1,1],[-1,-1,2],
    [-1,0,1]
]
*/

/*
trying out a different solution - sortof a "three pointers" version
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // sort the array
    // take each number, and try to find two in the remaining that when added
    //      to starting number equals 0 (add to output array)
    // if sum is too high, bring right pointer down
    // if sum is too low, bring left point up
    // once they meet, move on to next number

    let output = [];
    nums.sort((a, b) => a - b);
    // debugger;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let leftP = i + 1;
        let rightP = nums.length - 1;

        while (leftP < rightP) {
            let sum = nums[i] + nums[leftP] + nums[rightP];

            if (sum === 0) {
                output.push([nums[i], nums[leftP], nums[rightP]]);
                while (nums[leftP + 1] === nums[leftP]) {
                    leftP += 1;
                }
                while (nums[rightP - 1] === nums[rightP]) {
                    rightP -= 1;
                }
                leftP += 1;
                rightP -= 1;
            } else if (sum > 0) {
                rightP -= 1;
            } else {
                leftP += 1;
            }
        }

    }

    return output;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]), "[[-1,-1,2],[-1,0,1]]");
console.log(threeSum([1, 2, -2, -1]), "[]");
console.log(threeSum([0, 0, 0, 0]), "[0,0,0]");