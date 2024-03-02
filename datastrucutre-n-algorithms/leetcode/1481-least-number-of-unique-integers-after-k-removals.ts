// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/description/?envType=daily-question&envId=2024-02-16

// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.



// Example 1:

// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.
// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.


// Constraints:

// 1 <= arr.length <= 10^5
// 1 <= arr[i] <= 10^9
// 0 <= k <= arr.length

function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    let map = new Map<number, number>();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const mapValues= Array.from(map.values()).sort((a, b) => a- b);

    while (k >= mapValues[0]) {
        k -= mapValues[0];
        mapValues.shift();
    }
    return mapValues.length
};

console.log(findLeastNumOfUniqueInts([2,1,1,3,3,3], 3))