// https://leetcode.com/problems/coin-change-ii/
// Daily 23/08/11

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

// You may assume that you have an infinite number of each kind of coin.

// The answer is guaranteed to fit into a signed 32-bit integer.

// Example 1:

// Input: amount = 5, coins = [1,2,5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10]
// Output: 1

package main

// Brute Force
func change(amount int, coins []int) int {
	result := 0
	var numFlips func(start int, amount int)
	numFlips = func(index int, amount int) {
		if amount == 0 {
			result++
			return
		}
		if amount < 0 || index >= len(coins) {
			return
		}
		numFlips(index, amount-coins[index])
		numFlips(index+1, amount)
	}

	numFlips(0, amount)
	return result
}

// DP - Top Down
func change2(amount int, coins []int) int {
	dp := make([][]int, len(coins)+1)
	for i := range dp {
		dp[i] = make([]int, amount+1)
		for j := range dp[i] {
			dp[i][j] = -1
		}
	}

	var numFlips func(start int, amount int, dp [][]int) int
	numFlips = func(index int, amount int, dp [][]int) int {
		if amount == 0 {
			return 1
		}
		if amount < 0 || index >= len(coins) {
			return 0
		}
		if dp[index][amount] == -1 {
			dp[index][amount] = numFlips(index, amount-coins[index], dp) + numFlips(index+1, amount, dp)
		}
		return dp[index][amount]
	}

	return numFlips(0, amount, dp)
}
