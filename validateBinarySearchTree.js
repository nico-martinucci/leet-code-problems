/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:
Input: root = [2,1,3]
Output: true

Example 2:
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 

Constraints:
The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1

NOTES:
- need to make sure to evaluate nodes in the context of the entire side of the
    tree/subtree, not just it's parent node
- we care about any given node's relationship to its parent and grandparent, 
    which can be one of four options:
        - left/left - needs to be less than both
        - right/right - needs to be greater than both
        - G.left -> P.right -> C - needs to be greater than P, less than G
        - G.right -> P.left -> C - needs to be less than P, greater than G
- special cases: root (or no parent node) can just BE; first children (or no 
    grandparent node) only have to evaluate to their parent
- pass: values and left/right pathway to get to this point for both parent and grandparent

APPROACH:
- dfs/recursive; pass objects with pathway and value from ancestors

- if node is null, return true
- evaluate node in context of its ancestors
    - check node's value against parent and grandparent, depending on pathway
        - if P -> C is left and C is greater than P, return false
        - if P -> C is right and C is less than P, return false
        - if G -> P is left and C is greater than G, return false
        - if G -> P is right and C is less than G, return false
    - if we make it here, current node itself is valid
- then recursively call on its children nodes
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
 * @return {boolean}
 */
var isValidBST = function (root, parent = null, grandparent = null) {
    if (root === null) return true;

    if (parent) {
        if (parent.left === root && root.val >= parent.val) return false;
        if (parent.right === root && root.val <= parent.val) return false;
    }
    if (grandparent) {
        if (grandparent.left === parent && root.val >= grandparent.val) return false;
        if (grandparent.right === parent && root.val <= grandparent.val) return false;
    }

    const leftValid = isValidBST(root.left, parent = root, grandparent = parent);
    const rightValid = isValidBST(root.right, parent = root, grandparent = parent);

    if (leftValid && rightValid) return true;

    return false;
};

// TAKE TWO

/*
Given the root of a binary tree, determine if it is a valid binary search tree 
(BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's 
key. The right subtree of a node contains only nodes with keys greater than the 
node's key. Both the left and right subtrees must also be binary search trees.

NOTES:
- challenge: 
- each number that we check needs to be checked against a min and max
- i.e. each number has to be greater than the min, less than the max
- maxs are established as we traverse the tree in a left-wise direction
- mins are established in a right-wise direction

TEST CASES:
- root = [2,1,3] -> true
- root = [2,3,4] -> false
- root = [10,5,15,2,7,null,null] -> true
- root = [10,5,15,2,11,null,null] -> true
- root = [1] -> true

APPROACH:
- recursive
- base-case: if node is null, return true
- here, have a valid node
- check the node against the provided max/min
    - needs to be less than max, greater than min
- store recurisve calls to the node's children (with update min/max)
    - call left with an updated max
    - call right with an update min
- return wheter all of the above are true or not
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
 * @return {boolean}
 */
var isValidBST = function (root, max = Infinity, min = -Infinity) {
    if (root === null) return true;

    let validNode = root.val < max && root.val > min;

    validNode = validNode && isValidBST(root.left, root.val, min);
    validNode = validNode && isValidBST(root.right, max, root.val);

    return validNode;
};