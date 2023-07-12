package main

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func minArr(arr []int) int {
	minVal := arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i] < minVal {
			minVal = arr[i]
		}
	}
	return minVal
}

func gcd(a, b int) int {
	for b != 0 {
		a, b = b, a%b
	}
	return a
}
