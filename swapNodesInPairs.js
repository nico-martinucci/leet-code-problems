/*
Given a linked list, swap every two adjacent nodes and return its head. You must 
solve the problem without modifying the values in the list's nodes (i.e., only 
nodes themselves may be changed.)
 

Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100

NOTES:
- assume even number of nodes? no, any remaining node at end can stay as-is
- can't change the values of the nodes, just the order of the nodes

TEST CASES:
- [1,2,3,4] -> [2,1,4,3]
- [6,5,4] -> [5,6,4]
- [] -> []
- [1] -> [1]

APPROACH:
- iterate over the list, storing references to relevant nodes and swapping as
    needed
- take it one step at a time... assume n is node before the next pair:
    - store ref to n+1
    - set n.next to n+2
    - store ref to n+3
    - set n+2.next to be n+1
    - set n+1.next ot be n+3
    - n becomes n+2
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head) return null;

    let tempHead = new ListNode(null, head);
    let currNode = tempHead;

    while (currNode.next && currNode.next.next) {
        let n1 = currNode.next;
        currNode.next = n1.next;
        let n3 = n1.next.next;
        currNode.next.next = n1;
        n1.next = n3;

        currNode = currNode.next.next;
    }

    return tempHead.next;
};