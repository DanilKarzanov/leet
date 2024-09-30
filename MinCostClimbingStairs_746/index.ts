function minCostClimbingStairs(cost: number[]): number {
    const dp: number[] = []

    for (let i = 0; i < cost.length; i++) {
        if (i < 2) {
            dp[i] = cost[i]
            continue
        }   
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
    }

    console.log(dp)
    return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};