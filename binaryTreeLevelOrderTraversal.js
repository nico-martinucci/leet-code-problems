/*
Given the root of a binary tree, return the level order traversal of its nodes' 
values. (i.e., from left to right, level by level).


Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

NOTES
- returning an array of arrays
- each subarray is made up of the left-to-right non-null values of each layer 
        of the binary tree
- in the case of empty input, return an empty array

PROCESS
- breadth-first traversal of the tree
- for each level, store non-null values and push to output
- careful about keeping track of individual layers

PSEUDOCODE
- fail-fast: if root node is null, return an empty array
- define: output array, current queue, queue for the next level to search
- seed the output array with an empty array
- seed the current queue with our root node
- while our current queue has stuff in it...
    - shift a node off of our queue and store it
    - add any non-null children of that node to the next level queue
    - push val of current node to the last array in the output (output.length - 1)
    - if we run out of nodes in current, spread our next level nodes into current
            and reset next level; also add a new empty array to the end of output
- return output array
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    let result = [[]];
    let currentQueue = [root];
    let nextQueue = [];

    while (currentQueue.length > 0) {
        let currentNode = currentQueue.shift();

        if (currentNode.left) nextQueue.push(currentNode.left);
        if (currentNode.right) nextQueue.push(currentNode.right);

        result[result.length - 1].push(currentNode.val);

        if (currentQueue.length === 0 && nextQueue.length) {
            currentQueue = [...nextQueue];
            nextQueue = [];
            result.push([]);
        }
    }

    return result;
};