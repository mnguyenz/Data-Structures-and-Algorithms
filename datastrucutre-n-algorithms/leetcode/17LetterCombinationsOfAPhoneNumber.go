// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// Daily 23/08/03

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

package main

func letterCombinations(digits string) []string {
	phoneMap := map[string][]string{
		"2": {"a", "b", "c"},
		"3": {"d", "e", "f"},
		"4": {"g", "h", "i"},
		"5": {"j", "k", "l"},
		"6": {"m", "n", "o"},
		"7": {"p", "q", "r", "s"},
		"8": {"t", "u", "v"},
		"9": {"w", "x", "y", "z"},
	}

	result := []string{}

	if len(digits) == 0 {
		return result
	}

	var backTracking func(index int, currentBuildedletterCombination string)
	backTracking = func(index int, currentBuildedletterCombination string) {
		if len(currentBuildedletterCombination) == len(digits) {
			result = append(result, currentBuildedletterCombination)
			return
		}
		for _, char := range phoneMap[string(digits[index])] {
			backTracking(index+1, currentBuildedletterCombination+char)
		}
	}

	backTracking(0, "")

	return result
}
