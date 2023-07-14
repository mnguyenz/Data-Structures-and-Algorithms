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

func hasDuplicateChars(s string) bool {
	seenChars := make(map[rune]bool)
	for _, char := range s {
		if seenChars[char] {
			return true
		}
		seenChars[char] = true
	}
	return false
}

func checkExistedInArray(arr []int, val int) bool {
	for _, v := range arr {
		if v == val {
			return true
		}
	}
	return false
}
