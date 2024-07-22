// https://leetcode.com/problems/three-consecutive-odds/description/?envType=daily-question&envId=2024-07-01

// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.


// Example 1:

// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.
// Example 2:

// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.


// Constraints:

// 1 <= arr.length <= 1000
// 1 <= arr[i] <= 1000

function threeConsecutiveOdds(arr: number[]): boolean {
    let oddsCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            oddsCount++;
            if (oddsCount === 3) {
                return true;
            }
        } else {
            oddsCount = 0;
        }
    }
    return false;
};