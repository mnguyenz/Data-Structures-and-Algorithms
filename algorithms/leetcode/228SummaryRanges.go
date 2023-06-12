// https://leetcode.com/problems/summary-ranges/
// Daily 23/06/12

// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"

package main

import "strconv"

func summaryRanges(nums []int) []string {
	if len(nums) == 0 {
		return nil
	}
	var res []string
	var beforeIndex int = 0

	for i := range nums {
		if (i < len(nums)-1) && (nums[i]+1 == nums[i+1]) {
			continue
		}
		if beforeIndex == i {
			res = append(res, strconv.Itoa(nums[i]))
		} else {
			tmp := strconv.Itoa(nums[beforeIndex]) + "->" + strconv.Itoa(nums[i])
			res = append(res, tmp)
		}
		beforeIndex = i + 1
	}
	return res
}
