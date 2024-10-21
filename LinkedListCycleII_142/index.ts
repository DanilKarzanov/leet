// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return null
    }

    const map = new Map()
    let next: ListNode | null = head

    while (next !== null && next.next !== null) {
        if (map.has(next)) {
            return next
        }

        map.set(next, true)
        next = next.next
    }

    return null
};