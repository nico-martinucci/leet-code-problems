/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single 
digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the 
number 0 itself.

NOTES:
- head of each list is the 1s place
- base-10 addition, carrying any remainders forward
- return new linked list

TEST CASES:
- [1,1], [2,2] -> [3,3]
- [4,6], [7,1] -> [1,8]
- [4,6], [7,8] -> [1,5,1]
- [1], [4,5,6] -> [5,5,6]

APPROACH:
- iterative approach
- adding each matching node's values, storing the %10 of that in a new linked list,
    and carrying forward Math.floor( / 10) of it to the next iteration

- create a new output linked list
- create a pointer to the tail of the linked list
- create a remainder variable, set to 0
- create current digit references for both lists
- while loop, as long both refs are not null...
    - add the two vals together, plus any remainder from previous
    - create a new node on our linked list with the %10 of the total
    - update our linked list tail pointer
    - store the Math.floor( / 10) in remainder
    - update our pointers to curr.next
- while loop to clear out list 1, as long as the 1 ref is not null...
    - create a new node at the end of the linked list with val + remainder
    - update tail pointer
    - set remainder to 0
    - update 1 ref to .next
- while loop to clear out list 2, as long as the 2 ref is not null...
    - create a new node at the end of the linked list with val + remainder
    - update tail pointer
    - set remainder to 0
    - update 2 ref to .next

- return our output linked list
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) { // [7], [4,5,6] -> [1,6,6]
    let sumList = new ListNode(); // [{},{1},{6},{6}]
    let listTail = sumList; // {6}
    let remainder = 0; // 0

    let currNode1 = l1; // null
    let currNode2 = l2; // null

    while (currNode1 !== null || currNode2 !== null) {
        let sum = currNode1?.val || 0;
        sum += currNode2?.val || 0;
        sum += remainder;
        let newNode = new ListNode(sum % 10); // {1}
        listTail.next = newNode;
        listTail = newNode;
        remainder = Math.floor(sum / 10);

        currNode1 = currNode1?.next || null;
        currNode2 = currNode2?.next || null;
    }

    if (remainder === 1) {
        let newNode = new ListNode(remainder); // 
        listTail.next = newNode;
    }

    return sumList.next;
};