package main

func merge(nums1 []int, m int, nums2 []int, n int) {
	p1, p2, p3 := m-1, n-1, m+n-1

	for ; p2 >= 0; p3-- {

		if p1 >= 0 && nums1[p1] >= nums2[p2] {
			nums1[p3] = nums1[p1]
			p1--
		} else {
			nums1[p3] = nums2[p2]
			p2--
		}

	}
}

func main() {
	merge([]int{1, 2, 3, 0, 0, 0}, 3, []int{2, 5, 6}, 3)
}
