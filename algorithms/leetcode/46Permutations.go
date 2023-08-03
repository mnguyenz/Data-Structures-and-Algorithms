// https://leetcode.com/problems/permutations/description/
// Daily 23/08/02

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]

package main

func permute(nums []int) [][]int {
	result := [][]int{}

	if len(nums) == 1 {
		temp := make([]int, len(nums))
		copy(temp, nums)
		return [][]int{
			temp,
		}
	}

	for range nums {
		n := nums[0]
		nums = nums[1:]
		perms := permute(nums)

		for _, perm := range perms {
			perm = append(perm, n)
			result = append(result, perm)
		}
		nums = append(nums, n)
	}

	return result
}
