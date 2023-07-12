// https://leetcode.com/problems/minimum-falling-path-sum/?envType=study-plan-v2&envId=dynamic-programming

package main

func minFallingPathSum(matrix [][]int) int {
	n := len(matrix)
	for i := n - 2; i >= 0; i-- {
		for j := 0; j < n; j++ {
			if j == 0 {
				matrix[i][j] += minArr([]int{matrix[i+1][j], matrix[i+1][j+1]})
			} else if j == n-1 {
				matrix[i][j] += minArr([]int{matrix[i+1][j-1], matrix[i+1][j]})
			} else {
				matrix[i][j] += minArr([]int{matrix[i+1][j-1], matrix[i+1][j], matrix[i+1][j+1]})
			}
		}
	}
	return minArr(matrix[0])
}
