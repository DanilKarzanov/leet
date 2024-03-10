package main

import "fmt"

func recursiveCheck(digits []int, index int) []int {

	if digits[index] != 9 {
		digits[index] += 1
		return digits
	}

	if index == 0 && digits[0] == 9 {
		digits[0] = 0
		digits = append([]int{1}, digits...)
		return digits
	}

	digits[index] = 0
	return recursiveCheck(digits, index-1)
}

func plusOne(digits []int) []int {
	n := len(digits)

	return recursiveCheck(digits, n-1)
}

func main() {
	fmt.Print(plusOne([]int{1, 9, 9, 0}))
}
