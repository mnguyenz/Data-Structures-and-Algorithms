// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
// Daily 23/06/08

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0

package main

func countNegatives(grid [][]int) int {
	// Solution 1
	// count := 0
	// for i := 0; i < len(grid); i++ {
	// 	for j := 0; j < len(grid[i]); j++ {
	// 		if grid[i][j] < 0 {
	// 			count += len(grid[i]) - j
	// 			break
	// 		}
	// 	}
	// }

	// Solution 2 - Binary Search
	count := 0
	for i := 0; i < len(grid); i++ {
		if grid[i][0] < 0 {
			count += len(grid[i])
			continue
		}
		if grid[i][len(grid[i])-1] >= 0 {
			continue
		}
		left := 1
		right := len(grid[i]) - 1
		for left <= right {
			mid := (left + right) / 2
			if grid[i][mid] < 0 && grid[i][mid-1] >= 0 {
				count += len(grid[i]) - mid
			}
			if grid[i][mid] < 0 && grid[i][mid-1] < 0 {
				right = mid - 1
			} else {
				left = mid + 1
			}
		}
	}
	return count
}
