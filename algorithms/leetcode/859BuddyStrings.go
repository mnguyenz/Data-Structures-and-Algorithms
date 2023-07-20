// https://leetcode.com/problems/buddy-strings/
// Daily 23/07/03

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

package main

func buddyStrings(s string, goal string) bool {
	if len(s) != len(goal) {
		return false
	}
	if s == goal {
		if HasDuplicateChars(s) {
			return true
		}
		return false
	}
	var sChar, gChar rune
	result := false
	for i, char := range s {
		if s[i] != goal[i] {
			if sChar == 0 {
				sChar = char
				gChar = rune(goal[i])
			} else {
				if result == true {
					return false
				}
				if sChar == rune(goal[i]) && gChar == char {
					result = true
				} else {
					return false
				}
			}
		}
	}
	return result
}
