// https://leetcode.com/problems/unique-paths/

package main

func uniquePaths(m int, n int) int {
	if (m == 1) || (n == 1) {
		return 1
	}
	matrix := make([][]int, m)
	for i := 0; i < m; i++ {
		matrix[i] = make([]int, n)
	}
	for i := 0; i < n-1; i++ {
		matrix[m-1][i] = 1
	}
	for i := 0; i < m-1; i++ {
		matrix[i][n-1] = 1
	}
	for i := m - 2; i >= 0; i-- {
		for j := n - 2; j >= 0; j-- {
			matrix[i][j] = matrix[i+1][j] + matrix[i][j+1]
		}
	}
	return matrix[0][0]
}
