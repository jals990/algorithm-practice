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
let carry = 0;

function ListNode(val, next) {
  this.val  = val  === undefined ? 0    : val
  this.next = next === undefined ? null : next
}

let addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2 && carry === 0) {
        return null;
    }
    
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let nextL1 = l1 ? l1.next : null;
    let nextL2 = l2 ? l2.next : null;
    
    let sum = x + y + carry;

    carry = Math.floor(sum/10);
    sum = sum % 10;
        
    return {
        val: sum,
        next: addTwoNumbers(nextL1, nextL2)
    };
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)))

console.log(addTwoNumbers(l1, l2));
