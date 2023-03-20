/*
Given the root of an n-ary tree, return the preorder traversal of its nodes' 
values.

Nary-Tree input serialization is represented in their level order traversal. 
Each group of children is separated by the null value (See examples)

NOTES:
- return an array of values in traversal order

APPROACH:
- depth-first search, recursion
- accumulator to track values in order

- add current node's value to the accumulator
- base case: if .children is empty, return
- otherwise, loop over .children, making recursive calls to each
- return accumulator
*/

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root, accumulator = []) {
    if (!root) return accumulator;

    accumulator.push(root.val);

    if (root.children.length === 0) return;

    for (let child of root.children) {
        preorder(child, accumulator);
    }

    return accumulator;
};