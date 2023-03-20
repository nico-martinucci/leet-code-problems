/*
Given the head of a linked list, return the node where the cycle begins. 
If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be 
reached again by continuously following the next pointer. Internally, pos is 
used to denote the index of the node that tail's next pointer is connected to 
(0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a 
parameter.

Do not modify the linked list.

NOTES:
- can assume .val and .next approach? yes
- what to return on null input? null

TEST CASES:
- [{1}, {2}, {3}, {1}] -> {2}
- [{1}, {2}, {3}, {null}] -> {null}
- [{1}] -> {null}

APPROACH:
- recursion to test each node's "next" value, and see if it has already been seen
    - OR we reach null and return that
- set accumulator that tracks refs to all of the nodes we've seen so far

- base case: if .next is null, return null
- check if our .next ref is already in our accumulator; if it is, return the ref
- otherwise, add .next to the accumulator, and return a recursive call with .next
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head, accumulator = new Set([head])) {
    if (head === null) return null;
    if (head.next === null) return null;

    if (accumulator.has(head.next)) return head.next;

    accumulator.add(head.next);

    return detectCycle(head.next, accumulator);
};