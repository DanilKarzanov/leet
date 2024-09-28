function minSubArrayLen(target: number, nums: number[]): number {
    if (nums[0] >= target) {
        return 1
    }

    let windowSum = nums[0]
    let leftIdx = 0
    let rightIdx = 1
    let curMin

    while (rightIdx <= nums.length) {
        windowSum += nums[rightIdx]
        while (windowSum >= target) {
            let delta = rightIdx - leftIdx + 1
            if (curMin === undefined) curMin = delta
            if (delta < curMin) {
                curMin = delta
            }
            console.log("currentMin", curMin)
            windowSum -= nums[leftIdx]
            leftIdx++
        } 
        
        rightIdx++
    }

    return curMin || 0
};

minSubArrayLen(7, [2,3,1,2,4,3])