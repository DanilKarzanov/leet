const memo = new Map()

function minimumTotal(triangle: number[][]): number {
    const dp = Array.from(Array(triangle.length), (el, id) => new Array(id + 1))

    console.log(dp)









    return 1
    // base case
    // if (triangle.length === 1) {
    //     return triangle[0][0]
    // }

    // memo.set(1, triangle[0][0])

    // for (let i = 1; i < triangle.length; i++) {
    //     const row = triangle[i]
    //     console.log(row)
    //     for (let k = 0; k < row.length - 1; k++) {
    //         if (row[k] < row[k + 1]) {
    //             memo.set(i + 1, row[k])
    //         }
    //     }
    // }

    // console.log(memo)
    // return memo.get(triangle.length)
};

console.log(minimumTotal([[10], [1, 3], [6, 5, 2]]))