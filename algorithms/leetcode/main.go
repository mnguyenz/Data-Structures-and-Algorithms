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
	arr := []int{4, 12, 10, 0, -2, 7, -8, 9, -9, -12, -12, 8, 8}
	fmt.Println(longestSubsequence(arr, 1))
}
