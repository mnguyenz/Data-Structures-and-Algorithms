// https://leetcode.com/problems/asteroid-collision/
// Daily 23/07/20

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

package main

import "math"

func asteroidCollision(asteroids []int) []int {
	stack := make(stack, 0)
	for _, v := range asteroids {
		isValueExist := true
		for stack.Len() > 0 {
			isValueExist = true
			if stack.Peek() > 0 && v < 0 {
				peek := math.Abs(float64(stack.Peek()))
				floatV := math.Abs(float64(v))
				if peek > floatV {
					isValueExist = false
					break
				} else if peek == floatV {
					stack, _ = stack.Pop()
					isValueExist = false
					break
				} else {
					stack, _ = stack.Pop()
				}
			} else {
				stack = stack.Push(v)
				break
			}
		}
		if stack.Len() == 0 && isValueExist {
			stack = stack.Push(v)
		}
	}
	return stack
}
