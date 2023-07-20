package main

func minCostClimbingStairs(cost []int) int {
	for i := 2; i < len(cost); i++ {
		cost[i] += Min(cost[i-1], cost[i-2])
	}
	return Min(cost[len(cost)-1], cost[len(cost)-2])
}
