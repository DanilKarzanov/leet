function climbStairs(n: number): number {
    // base cases
    // length 1 - 1 way
    // length 2 - 2 ways
    if (n === 1 || n === 2) {
        return n
    }

    return climbStairs(n - 1) + climbStairs(n - 2)
}

const memo = new Map()

function climbStairsMemo(n: number): number {
    if (n === 1 || n === 2) {
        return n
    }

    if (memo.get(n) === undefined) {
        memo.set(n, climbStairsMemo(n - 1) + climbStairsMemo(n - 2))
    }

    return memo.get(n)
};

console.log(climbStairsMemo(45))