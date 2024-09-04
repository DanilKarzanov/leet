function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const idx = map.get(nums[i])
        if (idx !== undefined) {
            if (i - idx <= k) {
                return true
            }

        } 

        map.set(nums[i], i)
    }

    return false
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))