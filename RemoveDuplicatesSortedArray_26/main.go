package main

import (
	"fmt"
)

func removeDuplicates(nums []int) int {
	prev := 0

	for i := 1; i < len(nums); i++ {
		if nums[prev] != nums[i] {
			prev++
			nums[prev] = nums[i]
		}
		fmt.Print(nums, "\n")
	}

	return prev + 1
}

func main() {
	fmt.Print(removeDuplicates([]int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}))
}
