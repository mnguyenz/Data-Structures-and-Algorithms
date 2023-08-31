package main

type stackChar []rune

func (s stackChar) Len() int {
	return len(s)
}

func (s stackChar) Push(v rune) stackChar {
	return append(s, v)
}

func (s stackChar) Pop() (stackChar, rune) {
	l := len(s)
	if l == 0 {
		return nil, 0
	}
	return s[:l-1], s[l-1]
}

func (s stackChar) Peek() rune {
	return s[len(s)-1]
}
