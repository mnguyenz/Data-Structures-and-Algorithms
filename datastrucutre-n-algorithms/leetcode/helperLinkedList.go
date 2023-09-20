package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func (l *ListNode) AddLinkedList(val int) {
	// Create a new node
	newNode := &ListNode{
		Val:  val,
		Next: nil,
	}
	// Traverse to the end of the list
	current := l
	for current.Next != nil {
		current = current.Next
	}
	// Add the new node at the end
	current.Next = newNode
}

func PrintLinkedList(head *ListNode) {
	for head != nil {
		fmt.Println(head.Val)
		head = head.Next
	}
}

func LengthLinkedList(n *ListNode) int {
	var count int
	for n != nil {
		n = n.Next
		count++
	}
	return count
}
