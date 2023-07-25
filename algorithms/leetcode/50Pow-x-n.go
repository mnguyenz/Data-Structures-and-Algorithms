// https://leetcode.com/problems/powx-n/
// Daily 23/07/24

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

package main

import "math"

func myPow(x float64, n int) float64 {
	result := pow(x, int(math.Abs(float64(n))))
	if n > 0 {
		return result
	} else {
		return 1 / result
	}
}

func pow(x float64, n int) float64 {
	if x == 0 {
		return 0
	}
	if n == 0 {
		return 1
	}
	result := pow(x, n/2)
	result *= result
	if n%2 == 1 {
		result *= x
	}
	return result
}
