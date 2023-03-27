/*
Given the root of a binary tree, return a list containing the values of the 
right-most node of each row of the tree

NOTES:
- empty root node, return an empty array

TEST CASES:
        1
    2       3
  4
-> [1, 3, 4]

        1
    2       3
  4   5       6
-> [1, 3, 6]

APPROACH:
- breadth-first search
- build a queue "in order" -> the last node of each level's queue will be the 
    node that we want
- for each last node, capture it's value in an output array and return it

- guard: if root is null, return an empty array
- define:
    - an output array to store right-most values
    - current queue of nodes to visit (seed with the root node)
    - queue of next nodes to visit
- while loop, as long as our current queue has nodes to visit...
    - grab the left-most node from the current queue
    - if node has a .left, add it to the next nodes queue
    - if node has a .right, add it to the next nodes queue
    - if our current queue is empty... 
        - spread the queue of next nodes
        - reset the queue of next nodes
        - add the value of our current node to the output array
- return output array

TEST CASES:
        1
    "2"       3
  4
-> [1, 3, 4]
*/
function binaryTreeRightSideView(root) {
    if (root === null) return [];

    let output = []; // [1,3,4]
    let currQueue = [root]; // []
    let nextQueue = []; // []

    while (currQueue.length > 0) {
        let currNode = currQueue.shift(); // {4}

        if (currNode.left) nextQueue.push(currNode.left);
        if (currNode.right) nextQueue.push(currNode.right);

        if (currQueue.length === 0) {
            currQueue = [...nextQueue];
            nextQueue = [];
            output.push(currNode.val);
        }
    }

    return output;
}