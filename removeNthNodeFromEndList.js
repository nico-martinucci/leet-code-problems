/*
Given the head of a linked list, remove the nth node from the end of the list 
and return its head.

NOTES:
- n = 1 will remove last node, n = 2 will remove second-to-last node
- can assume at least one node in the list
- n always between 1 and length of list, inclusive
- don't know size of provided list

TEST CASES:
- [1,2,3], 1 -> [1,2]
- [1,2,3], 2 -> [1,3]
- [1,2,3], 3 -> [2,3]

APPROACH:
- unknown list length, need to get to the end, and can use that info to work backwards
- iterate over the list, storing references to each node in order
- once end is reached, we can backtrack to the lenght - n node, and reassign .next pointer

- guard: if head.next is null (i.e. list has length of 1), return null
- define an array of node pointers
- while the .next of the last pointer in the array is not null...
    - push current.next to our pointer array
- get array at length - n - 1, set it's .next to array at length - n + 1
- return head
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) { // [1,3], 2 -> [1,3]
    if (head.next === null) return null;

    let nodePointers = [head]; // [{1}, {2}, {3}]

    while (nodePointers[nodePointers.length - 1].next !== null) {
        nodePointers.push(nodePointers[nodePointers.length - 1].next);
    }

    if (n === nodePointers.length) {
        head = head.next
    } else {
        nodePointers[nodePointers.length - n - 1].next =
            nodePointers[nodePointers.length - n + 1] || null;
    }

    return head;
};