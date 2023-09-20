// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
// Daily 23/06/06

// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

// Example 1:

// Input: arr = [3,5,1]
// Output: true
// Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
// Example 2:

// Input: arr = [1,2,4]
// Output: false
// Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

package main

func canMakeArithmeticProgression(arr []int) bool {
	min := 1000000
	max := -1000000
	for i := 0; i < len(arr); i++ {
		if arr[i] < min {
			min = arr[i]
		}
		if arr[i] > max {
			max = arr[i]
		}
	}
	if (max-min)%(len(arr)-1) != 0 {
		return false
	}
	difference := (max - min) / (len(arr) - 1)
	if difference == 0 {
		return true
	}
	m := make(map[int]bool)
	for i := 0; i < len(arr); i++ {
		if (arr[i]-min)%difference != 0 {
			return false
		}
		m[arr[i]] = true
	}
	return len(m) == len(arr)
}
