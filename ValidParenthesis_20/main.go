package main

import (
	"fmt"
	"slices"
)

type Stack []string

func (s *Stack) Push(arg string) {
	*s = append(*s, arg)
}

func (s *Stack) Pop() string {
	i := len(*s) - 1
	el := (*s)[i]
	*s = (*s)[:i]
	return el
}

func (s *Stack) isEmpty() bool {
	return len(*s) == 0
}

func isValid(s string) bool {
	openingBrackets := []string{"(", "{", "["}
	closingBrackets := []string{")", "}", "]"}
	if len(s)%2 != 0 {
		return false
	}

	var stack Stack

	for _, char := range s {
		if slices.Contains(openingBrackets, string(char)) {
			// if !stack.isEmpty() {
			// 	return false
			// }
			stack.Push(string(char))
		}
		if slices.Contains(closingBrackets, string(char)) {
			// add checking if stack is empty !!!
			if stack.isEmpty() {
				return false
			}
			if slices.Index(openingBrackets, stack.Pop()) != slices.Index(closingBrackets, string(char)) {
				return false
			}
		}
	}

	return len(stack) == 0
}

func main() {
	fmt.Print(isValid("[("))
	fmt.Print("smth to test stdout")
}
