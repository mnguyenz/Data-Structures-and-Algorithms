// https://leetcode.com/problems/group-anagrams/
// https://neetcode.io/roadmap
// Arrays & Hashing

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

package main

func groupAnagrams(strs []string) [][]string {
	setMap := map[[26]int][]string{}
	for _, str := range strs {
		charToNumberMap := [26]int{}
		for _, char := range str {
			charToNumberMap[char-'a']++
		}
		setMap[charToNumberMap] = append(setMap[charToNumberMap], str)
	}
	result := [][]string{}
	for _, arrayOfStr := range setMap {
		result = append(result, arrayOfStr)
	}
	return result
}
