// https://leetcode.com/problems/minimum-size-subarray-sum/
// Daily 23/07/06

// Given an array of positive integers nums and a positive integer target, return the minimal length of a
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

package main

func minSubArrayLen(target int, nums []int) int {
	result := len(nums) + 1
	left, right := 0, 0
	sum := 0
	for right < len(nums) {
		sum += nums[right]
		for sum >= target {
			result = Min(result, right-left+1)
			sum -= nums[left]
			left++
		}
		right++
	}
	if result == len(nums)+1 {
		return 0
	}
	return result
}
