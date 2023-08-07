// https://leetcode.com/problems/search-a-2d-matrix/
// Daily 23/08/07

// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

package main

func searchMatrix(matrix [][]int, target int) bool {
	numberOfRows := len(matrix)
	numberOfColumns := len(matrix[0])

	left := 0
	right := numberOfRows*numberOfColumns - 1

	for left <= right {
		mid := (left + right) / 2
		value := matrix[mid/numberOfColumns][mid%numberOfColumns]
		if value == target {
			return true
		} else if value < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return false
}
