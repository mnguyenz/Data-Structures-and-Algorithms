// https://leetcode.com/problems/most-profit-assigning-work/?envType=daily-question&envId=2024-06-18

// You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:

// difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
// worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with difficulty at most worker[j]).
// Every worker can be assigned at most one job, but one job can be completed multiple times.

// For example, if three workers attempt the same job that pays $1, then the total profit will be $3. If a worker cannot complete any job, their profit is $0.
// Return the maximum profit we can achieve after assigning the workers to the jobs.



// Example 1:

// Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
// Output: 100
// Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.
// Example 2:

// Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
// Output: 0


// Constraints:

// n == difficulty.length
// n == profit.length
// m == worker.length
// 1 <= n, m <= 104
// 1 <= difficulty[i], profit[i], worker[i] <= 105

function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    let combined: [number, number][] = profit.map((p, i) => [p, difficulty[i]]);
    combined.sort((a, b) => b[0] - a[0]);
    let sortedProfit: number[] = combined.map(pair => pair[0]);
    let sortedDifficult: number[] = combined.map(pair => pair[1]);

    console.log(sortedProfit);
    console.log(sortedDifficult);

    let maxProfit = 0;
    for (let i = 0; i < worker.length; i++) {
        for (let j = 0; j < sortedProfit.length; j++) {
            if (worker[i] >= sortedDifficult[j]) {
                maxProfit += sortedProfit[j];
                break;
            }
        }
    }
    return maxProfit;
};

console.log(maxProfitAssignment([2, 3, 6, 12, 10], [10, 20, 10, 40, 20], [4, 5, 6, 7]))