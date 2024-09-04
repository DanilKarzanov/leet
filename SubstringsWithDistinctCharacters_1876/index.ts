function countGoodSubstrings(s: string): number {
    let count: number = 0
    let leftPointer: number = 0
    const occuredLetters: any = {}

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        if (occuredLetters[s[rightPointer]]) {
            occuredLetters[s[rightPointer]] += 1
        } else occuredLetters[s[rightPointer]] = 1

        if (rightPointer - leftPointer === 3) {
            const leftPointerEl = s[leftPointer]
            occuredLetters[leftPointerEl] -= 1
            if (occuredLetters[leftPointerEl] == 0) {
                delete occuredLetters[leftPointerEl]
            }

            leftPointer++
        }

        if (Object.keys(occuredLetters).length === 3) {
            count++
        }
    }

    return count
};

console.log(countGoodSubstrings("xyzzaz"))