// https://leetcode.com/problems/add-two-numbers-ii/
// Daily 23/07/17

// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]

package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	length1 := LengthLinkedList(l1)
	length2 := LengthLinkedList(l2)
	// l1 must be longer than l2
	if length1 < length2 {
		l1, l2 = l2, l1
		length1, length2 = length2, length1
	}
	// Traverse n1 until it reaches the same position as n2
	head := l1
	for length1 != length2 {
		l1 = l1.Next
		length1--
	}
	// Add n2.Val to n1.Val
	for l1 != nil {
		l1.Val += l2.Val
		l1 = l1.Next
		l2 = l2.Next
	}
	// keep asking the amount of carry from next node and return the carry of current node
	carry := getMyCarry(head)
	// if head node has carry, then we need to add a new node
	if carry > 0 {
		head = &ListNode{
			Val:  carry,
			Next: head,
		}
	}
	return head
}

func getMyCarry(n *ListNode) int {
	if n == nil {
		return 0
	}
	// find the previous carry
	carry := getMyCarry(n.Next)
	n.Val += carry
	if n.Val < 10 {
		return 0
	}
	n.Val -= 10
	return 1
}
