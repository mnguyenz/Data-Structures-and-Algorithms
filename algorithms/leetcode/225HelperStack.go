package main

type MyStack struct {
	values []int
}

func Constructor() MyStack {
	return MyStack{}
}

func (this *MyStack) Push(x int) {
	this.values = append(this.values, x)
	for i := 0; i < len(this.values)-1; i++ {
		this.values = append(this.values, this.values[0])
		this.values = this.values[1:]
	}
}

func (this *MyStack) Pop() int {
	val := this.values[0]
	this.values = this.values[1:]
	return val
}

func (this *MyStack) Top() int {
	return this.values[0]
}

func (this *MyStack) Empty() bool {
	return len(this.values) == 0
}
