package main

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
	list1 := &ListNode{}
	list1.addLinkedList(7)
	list1.addLinkedList(2)
	list1.addLinkedList(4)
	list1.addLinkedList(3)
	list2 := &ListNode{}
	list2.addLinkedList(5)
	list2.addLinkedList(6)
	list2.addLinkedList(4)
	printLinkedList(addTwoNumbers(list1, list2))
}
