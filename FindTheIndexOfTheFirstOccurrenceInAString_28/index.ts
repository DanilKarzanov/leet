function strStr(haystack: string, needle: string): number {
    let L = 0
    let R = needle.length - 1

    while (R < haystack.length) {
        if (haystack.slice(L, R + 1) === needle) {
            return L
        }

        L++
        R++
    }

    return -1
};