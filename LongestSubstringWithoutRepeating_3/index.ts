function lengthOfLongestSubstring(s: string): number {
    let leftPointer: number = 0
    let longest: number = 0    
    let letterPresent = new Map()

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        if (letterPresent.get(s[rightPointer])) {
            while (letterPresent.get(s[rightPointer])) {
                letterPresent.delete(s[leftPointer])
                leftPointer++
            }

            letterPresent.set(s[rightPointer], 1)
        } else {
            letterPresent.set(s[rightPointer], 1)
            if (letterPresent.size > longest) {
                longest = letterPresent.size
            }
        }
    }

    return longest
};

console.log(lengthOfLongestSubstring("qrsvbspk"))