// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=leetcode-75

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

package main

func isSubsequence(s string, t string) bool {
	if len(s) == 0 {
		return true
	}
	sIndex, tIndex := 0, 0
	for tIndex < len(t) {
		if s[sIndex] == t[tIndex] {
			sIndex++
		}
		if sIndex == len(s) {
			return true
		}
		tIndex++
	}
	return false
}
