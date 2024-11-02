// https://leetcode.com/problems/maximum-distance-in-arrays/description/?envType=daily-question&envId=2024-08-16

// You are given m arrays, where each array is sorted in ascending order.

// You can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers a and b to be their absolute difference |a - b|.

// Return the maximum distance.



// Example 1:

// Input: arrays = [[1,2,3],[4,5],[1,2,3]]
// Output: 4
// Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
// Example 2:

// Input: arrays = [[1],[1]]
// Output: 0


// Constraints:

// m == arrays.length
// 2 <= m <= 105
// 1 <= arrays[i].length <= 500
// -104 <= arrays[i][j] <= 104
// arrays[i] is sorted in ascending order.
// There will be at most 105 integers in all the arrays.

function maxDistance(arrays: number[][]): number {
    let min = Infinity;
    let nextMin = Infinity;
    let max = -Infinity;
    let nextMax = -Infinity;
    let indexMin = -1;
    let indexMax = -1;
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i][0] < min) {
            indexMin = i;
            nextMin = min;
            min = arrays[i][0];
        } else if (arrays[i][0] < nextMin) {
            nextMin = arrays[i][0];
        }
        if (arrays[i][arrays[i].length - 1] > max) {
            indexMax = i;
            nextMax = max;
            max = arrays[i][arrays[i].length - 1];
        } else if (arrays[i][arrays[i].length - 1] > nextMax) {
            nextMax = arrays[i][arrays[i].length - 1];
        }
    }
    if (indexMin === indexMax) {
        return Math.max(max - nextMin, nextMax - min);
    }
    return max - min;
};

console.log(maxDistance([[1,4],[0,5]]))