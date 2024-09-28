function findRepeatedDnaSequences(s: string): string[] {
    const windowSize = 10
    const occured = new Set()
    const repeated = new Set()
    let leftIdx = 0
    let rightIdx = windowSize

    while (rightIdx <= s.length) {
        const seq = s.slice(leftIdx, rightIdx)
        if (occured.has(seq)) {
            repeated.add(seq)
        }
        occured.add(seq)

        leftIdx++
        rightIdx++
    }

    return (Array.from(repeated) as string[])
};