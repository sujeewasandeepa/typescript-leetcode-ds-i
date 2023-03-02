class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // merge two sorted lists
    // return a new sorted list
    // if one list is empty, return the other list
    // if both lists are empty, return null
    // if both lists have values, compare the first values of each list

    let mergedList: ListNode | null = null;
    
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    } else if (list1.val <= list2.val) {
        mergedList = list1;
        mergedList.next = mergeTwoLists(list1.next, list2);
    } else {
        mergedList = list2;
        mergedList.next = mergeTwoLists(list1, list2.next);
    }

    return mergedList;
}
