/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
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

 var reverseList = function(head) {
     var curr = head;
     var prev = null;
     while (curr) {
         var tmp = curr.next
         curr.next = prev;
         prev = curr;
         curr = tmp;

     }
     return prev
 };

 /*
 Notes about solution:
 Rather than trying to change values from end to first like sorting an array, think about moving the head pointer
 from front to the end. There will be three pointers, previous, current, and next, or in this solution "tmp".
 previous pointer will be assigned a value null;
 current pointer will be assigned the head pointer;
 tmp pointer will be assigned head.next, this variable is only used for keeping track of head.next;
 The trick is to move previous and current pointers one by one while keeping track of the next pointer
 so that the current pointer is updated accordingly.
 Store the next pointer in the tmp variable so you don't lose it.
 Set the next pointer for current to previous because we want to point the other way.
 Now move up both previous and current pointers by 1 node.
 Keep going untill current node reaches null (next of null will be undefined).
 Finally return the previous or set the head to the previous pointer. 
 */
