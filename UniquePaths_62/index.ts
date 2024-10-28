function uniquePaths(m: number, n: number): number {
    // dp[n][m] = dp[n][m + 1] + dp[n + 1][m + 1]

    const dp: Array<any> = Array.from(Array(m), () => Array(n))
    for (let i = m - 1; i >= 0; i--) {
        for (let k = n - 1; k >= 0; k--) {
            // база динамики
            if ((i === m - 1) || (k === n - 1)) {
                dp[i][k] = 1
                continue
            }

            dp[i][k] = dp[i + 1][k] + dp[i][k + 1]
        }
    }

    return dp[0][0]
};