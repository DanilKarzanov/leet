/**
 Do not return anything, modify s in-place instead.
 */
 function reverseString(s: string[]): void {
    let leftPointer = 0
    let rightPointer = s.length - 1

    while (leftPointer < rightPointer) {
        let temp = s[rightPointer]
        s[rightPointer] = s[leftPointer]
        s[leftPointer] = temp
        leftPointer++
        rightPointer--
    }
};