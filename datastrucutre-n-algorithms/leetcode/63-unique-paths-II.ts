// https://leetcode.com/problems/unique-paths-ii/description/
// Daily 23/08/12

// You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

// Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The testcases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:

// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const numRows = obstacleGrid.length;
  const numCols = obstacleGrid[0].length;

  const dp = new Array(numRows + 1).fill(0).map((e) => Array(numCols + 1).fill(0));
  dp[0][1] = 1;
  for (let i = 1; i <= numRows; i++) {
    for (let j = 1; j <= numCols; j++) {
      dp[i][j] = obstacleGrid[i-1][j-1] ? 0 : dp[i-1][j] + dp[i][j-1]
    }
  }
  return dp[numRows][numCols]
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));