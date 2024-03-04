package main

import (
	"fmt"
)

func removeElement(nums []int, val int) int {
	prev := 0

	for _, v := range nums {
		if v != val {
			nums[prev] = v
			prev++
		}
	}

	return prev
}

func main() {
	fmt.Print(removeElement([]int{3, 2, 2, 3}, 2))
}
