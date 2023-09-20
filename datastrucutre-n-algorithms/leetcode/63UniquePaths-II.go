// https://leetcode.com/problems/unique-paths-ii/?envType=study-plan-v2&envId=dynamic-programming
// Dynamic Programming

// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:

// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

package main

func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	numRows := len(obstacleGrid)
	numCols := len(obstacleGrid[0])
	if (obstacleGrid[0][0] == 1) || (obstacleGrid[numRows-1][numCols-1] == 1) {
		return 0
	}
	if (numRows == 1) || (numCols == 1) {
		for i := 0; i < numRows; i++ {
			for j := 0; j < numCols; j++ {
				if obstacleGrid[i][j] == 1 {
					return 0
				}
			}
		}
		return 1
	}
	resultGrid := make([][]int, numRows)
	for i := 0; i < numRows; i++ {
		resultGrid[i] = make([]int, numCols)
	}
	resultGrid[numRows-1][numCols-1] = 1
	for i := numCols - 2; i >= 0; i-- {
		resultGrid[numRows-1][i] = calculateNumberOfPaths(obstacleGrid[numRows-1][i], resultGrid[numRows-1][i+1], 0)
	}
	for i := numRows - 2; i >= 0; i-- {
		resultGrid[i][numCols-1] = calculateNumberOfPaths(obstacleGrid[i][numCols-1], 0, resultGrid[i+1][numCols-1])
	}
	for i := numRows - 2; i >= 0; i-- {
		for j := numCols - 2; j >= 0; j-- {
			resultGrid[i][j] = calculateNumberOfPaths(obstacleGrid[i][j], resultGrid[i][j+1], resultGrid[i+1][j])
		}
	}
	return resultGrid[0][0]
}

func calculateNumberOfPaths(obstacleGridValue, right, below int) int {
	if obstacleGridValue == 1 {
		return 0
	} else {
		return right + below
	}
}
