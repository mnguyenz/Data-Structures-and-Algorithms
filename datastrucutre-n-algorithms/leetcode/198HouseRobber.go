package main

func rob(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}
	if len(nums) == 2 {
		return Max(nums[0], nums[1])
	}
	nums[1] = Max(nums[0], nums[1])
	for i := 2; i < len(nums); i++ {
		nums[i] = Max(nums[i-1], nums[i]+nums[i-2])
	}
	return Max(nums[len(nums)-1], nums[len(nums)-2])
}
