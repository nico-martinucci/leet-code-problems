/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two 
nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges 
between them.

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100
*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    // recursion
    // each node needs to calculate the max between:
    //      - longest possible path that's bubbled up from left
    //      - longest possible path that's bubbled up from right
    //      - it's own longest possible path (relative depth on left + relative depth on right)
    //          - where relative depth is max depth less current node's depth
    // need to return depth of each node AND the longest possible path (so the
    //      above can be calculated by parent nodes)

    return calcPaths(root).maxPath;

    function calcPaths(node, depth = 0) {
        if (!node.left && !node.right) return { depth, maxPath: 0 };

        let leftData = node.left ? calcPaths(node.left, depth + 1) : { depth, maxPath: 0 };
        let rightData = node.right ? calcPaths(node.right, depth + 1) : { depth, maxPath: 0 };

        let maxPath = (leftData.depth - depth) + (rightData.depth - depth);

        return {
            depth: Math.max(leftData.depth, rightData.depth),
            maxPath: Math.max(
                maxPath,
                leftData.maxPath,
                rightData.maxPath
            )
        }
    }
};

// ALTERNATIVELY, could've defined a `maxDiameter` outside of the inner function
// and used THAT to store what's happening in the `maxPath` property, and then
// just return the `depth` value to simplify things. Much lower space needs. 

const tree = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

console.log(diameterOfBinaryTree(tree), "3");