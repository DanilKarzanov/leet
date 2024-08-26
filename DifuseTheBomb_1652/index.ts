function decrypt(code: number[], k: number): number[] {
    let decryptedCode: number[] = Array(code.length).fill(0)
    if (k === 0) {
        return decryptedCode
    }

    let windowStart: number = 1
    let windowEnd: number = k
    let windowSum: number = 0
    // Redefining window interval
    if (k < 0) {
        windowStart = code.length - Math.abs(k)
        windowEnd = code.length - 1
    }

    // Calculating sum of initial window
    for (let i = windowStart; i <= windowEnd; i++) {
        windowSum += code[i]
    }

    for (let i = 0; i < code.length; i++) {
        decryptedCode[i] = windowSum
        // Moving the window by one
        windowEnd++
        windowSum -= code[windowStart % code.length]
        windowSum += code[windowEnd % code.length]
        windowStart++
    }

    return decryptedCode
};

console.log(decrypt([5,7,1,4], 3))