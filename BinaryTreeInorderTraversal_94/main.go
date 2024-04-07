package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

type Stack []*TreeNode

func (s *Stack) Push(arg *TreeNode) {
	*s = append(*s, arg)
}

func (s *Stack) Pop() *TreeNode {
	i := len(*s) - 1
	el := (*s)[i]
	*s = (*s)[:i]
	return el
}

func (s *Stack) isEmpty() bool {
	return len(*s) == 0
}

func inorderTraversal(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	s := Stack{}
	curr := root
	values := []int{}

	for curr != nil || !s.isEmpty() {

		for curr != nil {
			s.Push(curr)
			curr = curr.Left
		}

		curr = s.Pop()
		values = append(values, curr.Val)

		curr = curr.Right
	}

	return values
}

func main() {
	// fmt.Print(inorderTraversal())
}
