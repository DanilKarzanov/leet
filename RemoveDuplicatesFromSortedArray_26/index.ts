function removeDuplicates(nums: number[]): number {
    let removedArrayIndex = 1 
    let initialArrayIndex = 1

    let len = nums.length

    for (initialArrayIndex; initialArrayIndex < len; initialArrayIndex++) {
        if (nums[initialArrayIndex] !== nums[initialArrayIndex - 1]) {
            nums[removedArrayIndex] = nums[initialArrayIndex]
            removedArrayIndex++
        }
    }

    return removedArrayIndex
};