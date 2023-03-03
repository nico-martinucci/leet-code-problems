/*
Given a binary tree, determine if it is 
height-balanced
.
 

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true
 

Constraints:

The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
*/

/*
SUPER GOOD LESSON IN THIS ONE! if doing recursion and you're having trouble getting
return types to work (e.g. ultimately want to return a boolean, but to determine
which boolean to return you have to deal with comparing integer values), break it 
up! have two functions, one that recursively goes through the integer values
and one that determines what to ultimately return based on the output of the
recursive function. cool!
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;

    if (getDepth(root) === -1) return false;

    return true;
};

var getDepth = function(root) {
    if (root === null) return 0;

    let leftDepth = getDepth(root.left);
    let rightDepth = getDepth(root.right);

    if (leftDepth === -1 || rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;

    return Math.max(leftDepth, rightDepth) + 1;
};

const node = new TreeNode(
    1,
    null,
    new TreeNode(
        2,
        null,
        new TreeNode(3, null, null)
    )
)

console.log(isBalanced(node), "false");