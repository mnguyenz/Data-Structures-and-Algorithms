package main

type stackInt []int

func (s stackInt) Len() int {
	return len(s)
}

func (s stackInt) Push(v int) stackInt {
	return append(s, v)
}

func (s stackInt) Pop() (stackInt, int) {
	l := len(s)
	if l == 0 {
		return nil, 0
	}
	return s[:l-1], s[l-1]
}

func (s stackInt) Peek() int {
	return s[len(s)-1]
}
