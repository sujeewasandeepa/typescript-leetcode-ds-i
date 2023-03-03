class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


export function deleteDuplicates(head: ListNode | null): ListNode | null {
    let currentNode: ListNode | null = head;
    
    if (currentNode === null) {
        return null;
    }
    while (currentNode?.next !== null) {
        if (currentNode.val === currentNode.next.val) {
            currentNode.next = currentNode.next.next;
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
};