// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

package main

import (
	"strings"
)

// Solution 1

func gcdOfStrings(str1 string, str2 string) string {
	len1 := len(str1)
	len2 := len(str2)

	isDivisor := func(len int) bool {
		if len1%len == 0 && len2%len == 0 {
			f1 := len1 / len
			f2 := len2 / len
			if strings.Repeat(str1[:len], f1) == str1 && strings.Repeat(str1[:len], f2) == str2 {
				return true
			}
		}
		return false
	}

	for i := min(len1, len2); i > 0; i-- {
		if isDivisor(i) {
			return str1[:i]
		}
	}
	return ""
}

// Solution 2
func gcdOfStrings2(str1 string, str2 string) string {
	if str1+str2 != str2+str1 {
		return ""
	}
	gcd := gcd(len(str1), len(str2))
	return str1[:gcd]
}
