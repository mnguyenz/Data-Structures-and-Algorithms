// https://leetcode.com/problems/minimum-path-sum/
// Dynamic Programming

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example 1:

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
// Example 2:

// Input: grid = [[1,2,3],[4,5,6]]
// Output: 12

package main

func minPathSum(grid [][]int) int {
	numRows := len(grid)
	numCols := len(grid[0])
	result := 0
	if (numRows == 1) || (numCols == 1) {
		for i := 0; i < len(grid); i++ {
			for j := 0; j < len(grid[i]); j++ {
				result += grid[i][j]
			}
		}
		return result
	}
	resultGrid := make([][]int, numRows)
	for i := 0; i < numRows; i++ {
		resultGrid[i] = make([]int, numCols)
	}
	resultGrid[numRows-1][numCols-1] = grid[numRows-1][numCols-1]
	for i := numCols - 2; i >= 0; i-- {
		resultGrid[numRows-1][i] = grid[numRows-1][i] + resultGrid[numRows-1][i+1]
	}
	for i := numRows - 2; i >= 0; i-- {
		resultGrid[i][numCols-1] = grid[i][numCols-1] + resultGrid[i+1][numCols-1]
	}
	for i := numRows - 2; i >= 0; i-- {
		for j := numCols - 2; j >= 0; j-- {
			if resultGrid[i+1][j] < resultGrid[i][j+1] {
				resultGrid[i][j] = grid[i][j] + resultGrid[i+1][j]
			} else {
				resultGrid[i][j] = grid[i][j] + resultGrid[i][j+1]
			}
		}
	}
	return resultGrid[0][0]
}
