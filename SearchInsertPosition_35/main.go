package main

import "fmt"

func searchInsert(nums []int, target int) int {
	leftBoundary := 0
	rightBoundary := len(nums) - 1

	for leftBoundary <= rightBoundary {
		median := (rightBoundary + leftBoundary) / 2

		if nums[median] == target {
			return median
		}

		if nums[median] < target {
			leftBoundary = median + 1
		} else {
			rightBoundary = median - 1
		}

	}

	return leftBoundary
}

func main() {
	nums := []int{1, 3, 5, 6}
	fmt.Print(searchInsert(nums, 2))
}
