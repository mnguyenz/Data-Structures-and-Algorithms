package main

type stack []int

func (s stack) Len() int {
	return len(s)
}

func (s stack) Push(v int) stack {
	return append(s, v)
}

func (s stack) Pop() (stack, int) {
	l := len(s)
	if l == 0 {
		return nil, 0
	}
	return s[:l-1], s[l-1]
}

func (s stack) Peek() int {
	return s[len(s)-1]
}
