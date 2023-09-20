// https://leetcode.com/problems/combinations/
// Daily 23/08/01

// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// Example 1:

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Explanation: There are 4 choose 2 = 6 total combinations.
// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
// Example 2:

// Input: n = 1, k = 1
// Output: [[1]]
// Explanation: There is 1 choose 1 = 1 total combination.

package main

func combine(n int, k int) [][]int {
	result := [][]int{}

	var backTracking func(start int, combination []int)
	backTracking = func(start int, combination []int) {
		if len(combination) == k {
			temp := make([]int, len(combination))
			copy(temp, combination)
			result = append(result, temp)
			return
		}
		for i := start; i <= n; i++ {
			combination = append(combination, i)
			backTracking(i+1, combination)
			combination = combination[:len(combination)-1]
		}
	}

	backTracking(1, []int{})
	return result
}
