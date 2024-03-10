package main

import (
	"fmt"
	"strings"
)

func lengthOfLastWord(s string) int {
	arr := strings.Split(strings.Trim(s, " "), " ")
	return len(arr[len(arr)-1])
}

func main() {
	fmt.Print(lengthOfLastWord("   fly me   to   the moon  "))
}
