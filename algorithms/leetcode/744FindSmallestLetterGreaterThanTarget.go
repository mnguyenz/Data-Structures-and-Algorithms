// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// Daily 23/06/09

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.

// Example 1:

// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.
// Example 2:

// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.
// Example 3:

// Input: letters = ["x","x","y","y"], target = "z"
// Output: "x"
// Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].

package main

func nextGreatestLetter(letters []byte, target byte) byte {
	// Solution 1
	// for i := 0; i < len(letters); i++ {
	// 	if letters[i] > target {
	// 		return letters[i]
	// 	}
	// }
	// return letters[0]

	// Solution 2 - Binary Search
	if (letters[0] > target) || (letters[len(letters)-1] <= target) {
		return letters[0]
	}
	left := 1
	right := len(letters) - 1
	for left <= right {
		mid := (left + right) / 2
		if (letters[mid] > target) && (letters[mid-1] <= target) {
			return letters[mid]
		}
		if (letters[mid] > target) && (letters[mid-1] > target) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return letters[0]
}
