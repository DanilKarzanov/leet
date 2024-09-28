function divisorSubstrings(num: number, k: number): number {
    let leftIdx = 0
    let rightIdx = k
    let stringNum = num.toString()
    let beauty = 0
    
    while (rightIdx <= stringNum.length) {
        if (num % Number(stringNum.slice(leftIdx, rightIdx)) === 0) {
            beauty++
        }

        leftIdx++
        rightIdx++
    }

    return beauty
};