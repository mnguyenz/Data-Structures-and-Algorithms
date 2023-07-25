package main

import "fmt"

func main() {
	// grid := [][]int{
	// 	{4, 3, 2, -1},
	// 	{3, 2, 1, -1},
	// 	{1, 1, -1, -2},
	// 	{-1, -1, -2, -3},
	// }
	// fmt.Println(countNegatives(grid))

	// arr := []int{4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8}
	// fmt.Println(longestSubsequence(arr, 1))

	// list1 := &ListNode{}
	// list1.AddLinkedList(7)
	// list1.AddLinkedList(2)
	// list1.AddLinkedList(4)
	// list1.AddLinkedList(3)
	// list2 := &ListNode{}
	// list2.AddLinkedList(5)
	// list2.AddLinkedList(6)
	// list2.AddLinkedList(4)
	// PrintLinkedList(addTwoNumbers(list1, list2))

	arr := []int{3, 4, 5, 1}
	fmt.Println(peakIndexInMountainArray(arr))
}
