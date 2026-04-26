class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function deleteDuplicates(head: ListNode | null): ListNode | null {
  let cur = head;
    while (cur && cur.next) {
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};
const listNode = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
const result1 = deleteDuplicates(listNode);
console.log(JSON.stringify(result1))

function reverseList(head: ListNode | null): ListNode | null {
  let cur = head;
  let prev: ListNode | null = null;

  while (cur) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  return prev;
}


const listNode1 = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))))
const result = reverseList(listNode1);
console.log(JSON.stringify(result))

