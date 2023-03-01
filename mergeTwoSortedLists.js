/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/



function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let tail = head;

    let list1Head = list1;
    let list2Head = list2;

    while ((list1Head?.val || list1Head?.val === 0) && (list2Head?.val || list2Head?.val === 0)) {
        if (list1Head.val < list2Head.val) {
            tail.next = new ListNode(list1Head.val);
            list1Head = list1Head.next;
        } else if (list2Head.val <= list1Head.val) {
            tail.next = new ListNode(list2Head.val);
            list2Head = list2Head.next;
        }
        tail = tail.next;
    }

    while (list1Head?.val || list1Head?.val === 0) {
        tail.next = new ListNode(list1Head.val);
        list1Head = list1Head.next;
        tail = tail.next;
    }

    while (list2Head?.val || list2Head?.val === 0) {
        tail.next = new ListNode(list2Head.val);
        list2Head = list2Head.next;
        tail = tail.next;
    }

    return head.next;
};

console.log(mergeTwoLists(
        new ListNode(1, new ListNode(2, new ListNode(4))), 
        new ListNode(1, new ListNode(3, new ListNode(4)))
    ), "[1,1,2,3,4,4]"
);
console.log(mergeTwoLists(
        new ListNode(-9, new ListNode(3)), 
        new ListNode(5, new ListNode(7))
    ), "[-9,3,5,7]"
);