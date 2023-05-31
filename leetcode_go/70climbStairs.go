package main

func climbStairs(n int) int {
	if n == 1 {
		return 1
	}
	num1 := 1
	num2 := 1
	for i := n; i >= 2; i-- {
		temp := num1
		num1 += num2
		num2 = temp
	}
	return num1
}
