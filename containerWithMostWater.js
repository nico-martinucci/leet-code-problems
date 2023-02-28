/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let leftP = 0;
    let rightP = height.length - 1;
    let currMinHeight = Math.min(height[leftP], height[rightP]);
    let maxArea = currMinHeight * (rightP - leftP);

    while (leftP < rightP) {

        currMinHeight = Math.min(height[leftP], height[rightP]);
        let currArea = currMinHeight * (rightP - leftP);
        maxArea = Math.max(maxArea, currArea);

        if (height[leftP] > height[rightP]) {
            rightP -= 1;
        } else {
            leftP += 1;
        }
    }

    return maxArea;
};

console.log(maxArea([1,1]), "1");
console.log(maxArea([1,0,0,0,2,0,2,0,0,0,1]), "10");
console.log(maxArea([1,2,20,21,0,2,1]), "20");
console.log(maxArea([1,8,6,2,5,4,8,3,7]), "49");
console.log(maxArea([2,3,10,5,7,8,9]), "36");

/*
NOTES: this solution is very similar to some of the posted solutions, so good
job! Key question with two-pointers is "when do you move each pointer? what
other information that you have is that decision based on?" In this case, you
want to move the pointer that is likely to result in a new higher area, which
is always going to mean moving the lower of the two pointers.
*/