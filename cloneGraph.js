/*
Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). 
For example, the first node with val == 1, the second node with val == 2, and 
so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite 
graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the 
copy of the given node as a reference to the cloned graph.

 

Example 1:
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.
1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).

Example 2:
Input: adjList = [[]]
Output: [[]]
Explanation: Note that the input contains one empty list. The graph consists of 
only one node with val = 1 and it does not have any neighbors.

Example 3:
Input: adjList = []
Output: []
Explanation: This an empty graph, it does not have any nodes.
 

Constraints:

The number of nodes in the graph is in the range [0, 100].
1 <= Node.val <= 100
Node.val is unique for each node.
There are no repeated edges and no self-loops in the graph.
The Graph is connected and all nodes can be visited starting from the given node.

APPROACH:
- BFS
- ensure that each adjacent node is a) created and b) on the current node's adjacency list
- will need to keep track of both created and visited nodes
    - created: refs to each node
    - visited: index
- keeping careful track of input nodes vs. new nodes

PSEUDOCODE:
- fail-fast: if graph is empty, return null
- fail-fast: if single node with no adjacencies, return a new single node with same val

- create a new graph - start with input node
- initialize variables:
    - array for nodes to visit (queue) - start by spread input's adjacencies
    - object with key/val = index/ref for created nodes - start with input node index/ref
    - set for visited nodes
- while we have elements in our queue...
    - shift first element off
    - find associated node off of new graph
    - loop through it's adjaceny list, for each:
        - if not yet created:
            - creating a new node for any new ones
            - adding ref to the above object
        - add to current new node's adjacencies
        - push to queue if not in set
    - add current node's index to list of visited nodes

- return new graph
*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return null;
    if (node.neighbors.length === 0) return new Node(node.val);

    let copy = new Node(node.val);
    let queue = [node];
    let createdNodes = { [node.val]: copy };
    let addedNodes = new Set();
    let visitedNodes = new Set();

    while (queue.length > 0) {
        let originalNode = queue.shift();
        let copyNode = createdNodes[originalNode.val];

        for (let neighbor of originalNode.neighbors) {
            let neighborNode = createdNodes[neighbor.val];

            if (!neighborNode) {
                neighborNode = new Node(neighbor.val);
                copyNode.neighbors.push(neighborNode);
                createdNodes[neighborNode.val] = neighborNode;
            } else {
                copyNode.neighbors.push(neighborNode);
            }

            if (!visitedNodes.has(neighbor.val) && !addedNodes.has(neighbor.val)) {
                queue.push(neighbor);
                addedNodes.add(neighbor.val);
            }
        }

        visitedNodes.add(copyNode.val);
    }

    return copy;
};