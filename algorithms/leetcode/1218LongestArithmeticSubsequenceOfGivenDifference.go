// https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/
// Daily 23/07/14

// Given an integer array arr and an integer difference, return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference.

// A subsequence is a sequence that can be derived from arr by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: arr = [1,2,3,4], difference = 1
// Output: 4
// Explanation: The longest arithmetic subsequence is [1,2,3,4].
// Example 2:

// Input: arr = [1,3,5,7], difference = 1
// Output: 1
// Explanation: The longest arithmetic subsequence is any single element.
// Example 3:

// Input: arr = [1,5,7,8,5,3,4,2,1], difference = -2
// Output: 4
// Explanation: The longest arithmetic subsequence is [7,5,3,1].

package main

// Solution 1 - TLE
func longestSubsequence1(arr []int, difference int) int {
	result := 1
	subsequence := 1
	selected := []int{}
	for i := 0; i < len(arr)-1; i++ {
		if !checkExistedInArray(selected, arr[i]) {
			endSubsequence := arr[i]
			for j := i + 1; j < len(arr); j++ {
				if arr[j]-endSubsequence == difference {
					selected = append(selected, arr[j])
					endSubsequence = arr[j]
					subsequence += 1
				}
			}
			result = max(subsequence, result)
			subsequence = 1
		}
	}
	return result
}

// Solution 2 - DP
func longestSubsequence(arr []int, difference int) int {
	dpMap := make(map[int]int)
	result := 1
	for _, v := range arr {
		value, exist := dpMap[v-difference]
		if !exist {
			dpMap[v] = 1
		} else {
			dpMap[v] = value + 1
			if dpMap[v] > result {
				result = dpMap[v]
			}
		}
	}
	return result
}
