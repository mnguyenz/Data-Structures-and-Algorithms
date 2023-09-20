package main

func tribonacci(n int) int {
	if n == 0 {
		return 0
	}
	if n == 1 {
		return 1
	}
	if n == 2 {
		return 1
	}
	num1 := 0
	num2 := 1
	num3 := 1
	for i := 3; i <= n; i++ {
		temp := num1
		num1 = num2
		num2 = num3
		num3 = temp + num1 + num2
	}
	return num3
}
