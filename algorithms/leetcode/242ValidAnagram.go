// https://leetcode.com/problems/valid-anagram/
// https://neetcode.io/roadmap
// Arrays & Hashing

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

package main

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	numberMap := make(map[rune]int)

	for _, char := range s {
		if _, exist := numberMap[char]; exist {
			numberMap[char]++
		} else {
			numberMap[char] = 1
		}
	}

	for _, char := range t {
		if _, exist := numberMap[char]; exist {
			if numberMap[char] > 0 {
				numberMap[char]--
			} else {
				return false
			}
		} else {
			return false
		}
	}
	return true
}
