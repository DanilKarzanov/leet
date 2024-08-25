function generate(numRows: number): number[][] {
    if (numRows === 0) {
        return []
    } 
    if (numRows === 1) {
        return [[1]]
    }

    const arr: Array<number> = []
    const prevRows = generate(numRows - 1)

    for (let i = 0; i < numRows; i++) {
        if (i == 0 || i == numRows - 1) {
            arr[i] = 1
        } else {
            arr[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i]
        }
    }

    prevRows.push(arr)

    return prevRows
};

console.log(generate(5))