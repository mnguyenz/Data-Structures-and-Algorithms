// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
// Daily 23/06/07

// Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
// Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

// Example 1:

// Input: a = 2, b = 6, c = 5
// Output: 3
// Explanation: After flips a = 1 , b = 4 , c = 5 such that (a OR b == c)
// Example 2:

// Input: a = 4, b = 2, c = 7
// Output: 1
// Example 3:

// Input: a = 1, b = 2, c = 3
// Output: 0

package main

func minFlips(a int, b int, c int) int {
	result := 0
	for a > 0 || b > 0 || c > 0 {
		ai, bi, ci := a%2, b%2, c%2
		a, b, c = a/2, b/2, c/2
		if ai|bi != ci {
			result++
			if ci == 0 && ai == 1 && bi == 1 {
				result++
			}
		}
	}
	return result
}
