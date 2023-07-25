// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/
// Daily 23/07/25

// An array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// You must solve it in O(log(arr.length)) time complexity.

package main

func peakIndexInMountainArray(arr []int) int {
	l, r := 1, len(arr)-2
	for l <= r {
		mid := (l + r) / 2
		if arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1] {
			return mid
		}
		if arr[mid-1] < arr[mid] && arr[mid] < arr[mid+1] {
			l = mid + 1
		} else {
			r = mid - 1
		}
	}
	return -1
}
