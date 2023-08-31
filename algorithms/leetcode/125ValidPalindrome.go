// https://leetcode.com/problems/valid-palindrome/
// https://neetcode.io/roadmap
// Two Pointers

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

package main

import (
	"strings"
)

func isPalindrome2(s string) bool {
	cleanedString := strings.ToLower(RemoveNonAlphanumeric(s))
	if len(cleanedString) <= 1 {
		return true
	}
	left := 0
	right := len(cleanedString) - 1
	for left < right {
		if cleanedString[left] != cleanedString[right] {
			return false
		}
		left++
		right--
	}
	return true
}

func isPalindrome(s string) bool {
	left := 0
	right := len(s) - 1
	for left < right {
		if !IsAlphanumeric(s[left]) {
			left++
			continue
		}
		if !IsAlphanumeric(s[right]) {
			right--
			continue
		}
		if LowercaseByteToRune(s[left]) != LowercaseByteToRune(s[right]) {
			return false
		}
		left++
		right--
	}
	return true
}
