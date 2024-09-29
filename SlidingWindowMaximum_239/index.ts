function maxSlidingWindow(nums: number[], k: number): number[] {
    let output: number[] = []
    let deque: number[] = []          // Decreasing Monotonic Queue
    let l = 0          
    let r = 0               

    while (r < nums.length) {
        while (nums[deque.at(-1)!] < nums[r]) {
            deque.pop()
        }
        deque.push(r)    // pushing the index, not the value

        if (r - l + 1 === k) {
            output.push(nums[deque[0]])
            l++
            if (l > deque[0]) {
                deque.shift()
            }
        }

        r++
    }

    return output
};