function isAlphaNumericChar(char: string): boolean {
    const lowered = char.toLowerCase()

    if (    
        (lowered >= "a" && lowered <= "z") ||
        (lowered >= "0" && lowered <= "9")
    ) return true

    return false
}

function isPalindrome(s: string): boolean {
    let leftPointer = 0
    let rightPointer = s.length - 1

    while (leftPointer <= rightPointer) {
        if (!isAlphaNumericChar(s[leftPointer])) {
            leftPointer++
            continue
        }

        if (!isAlphaNumericChar(s[rightPointer])) {
            rightPointer--
            continue
        }

        if (s[leftPointer].toLowerCase() === s[rightPointer].toLowerCase()) {
            leftPointer++
            rightPointer--
        } else return false
    }

    return true
};