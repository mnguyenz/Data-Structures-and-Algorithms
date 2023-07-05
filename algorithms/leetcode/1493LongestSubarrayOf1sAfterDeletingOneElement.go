// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
// Daily 23/07/05

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

package main

func longestSubarray(nums []int) int {
	zerosArr := []int{}
	for i := range nums {
		if nums[i] == 0 {
			zerosArr = append(zerosArr, i)
		}
	}
	if len(zerosArr) <= 1 {
		return len(nums) - 1
	}
	zerosArr = append(zerosArr, len(nums))

	previous := zerosArr[0]
	current := zerosArr[0]
	maximum := zerosArr[0]
	for i := 1; i < len(zerosArr); i++ {
		current = zerosArr[i] - zerosArr[i-1] - 1
		maximum = max(maximum, previous+current)
		previous = current
	}
	return maximum
}
