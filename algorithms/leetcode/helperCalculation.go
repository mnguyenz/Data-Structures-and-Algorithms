package main

import "sort"

func Max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func Min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func MaxArr(arr []int) int {
	maxVal := arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i] > maxVal {
			maxVal = arr[i]
		}
	}
	return maxVal
}

func MinArr(arr []int) int {
	minVal := arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i] < minVal {
			minVal = arr[i]
		}
	}
	return minVal
}

// Greatest common divisor
func Gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}

func HasDuplicateChars(s string) bool {
	seenChars := make(map[rune]bool)
	for _, char := range s {
		if seenChars[char] {
			return true
		}
		seenChars[char] = true
	}
	return false
}

func CheckExistedInArray(arr []int, val int) bool {
	for _, v := range arr {
		if v == val {
			return true
		}
	}
	return false
}

func SortIntervalsByFirstElement(intervals [][]int) {
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][1] < intervals[j][1]
	})
}
