// https://leetcode.com/problems/valid-parentheses/description/
// https://neetcode.io/roadmap
// Stack

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

package main

func isValid(s string) bool {
	if len(s) == 0 {
		return true
	}
	if len(s)%2 != 0 {
		return false
	}
	stack := make(stackChar, 0)
	for _, char := range s {
		if char == '{' {
			stack = stack.Push('}')
		} else if char == '[' {
			stack = stack.Push(']')
		} else if char == '(' {
			stack = stack.Push(')')
		} else if stack.Len() > 0 {
			if stack.Peek() != char {
				return false
			} else {
				stack, _ = stack.Pop()
			}
		} else {
			return false
		}
	}
	return stack.Len() == 0
}
