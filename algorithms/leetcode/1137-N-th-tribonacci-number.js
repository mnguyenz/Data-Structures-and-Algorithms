/**
 * @param {number} n
 * @return {number}
 */
const tribonacci1 = (n) => {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 1
  }
  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

const tribonacci = (n) => {
  const f = new Array(n + 3);
  f[0] = 0;
  f[1] = 1;
  f[2] = 1;
  for (let i = 3; i <= n; i++)
  {
    f[i] = f[i - 1] + f[i - 2] + f[i - 3];
  }
  return f[n];
};

console.log(tribonacci(25));