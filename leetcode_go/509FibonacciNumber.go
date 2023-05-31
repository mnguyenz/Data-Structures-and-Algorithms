package main

func fib(n int) int {
	if n == 0 {
		return 0
	}
	if n == 1 {
		return 1
	}
	num1 := 0
	num2 := 1
	for i := 2; i <= n; i++ {
		temp := num1
		num1 = num2
		num2 = temp + num1
	}
	return num2
}
