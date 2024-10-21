/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let iterationPointer = 0
    let zeroPointer = 0

    while (iterationPointer < nums.length) {
        if (nums[iterationPointer] !== 0) {
            let temp = nums[iterationPointer]
            nums[iterationPointer] = nums[zeroPointer]
            nums[zeroPointer] = temp

            zeroPointer++
        } 

        iterationPointer++
    }
};