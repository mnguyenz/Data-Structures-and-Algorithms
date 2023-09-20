/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// Easy solution 1
const dailyTemperatures = (temperatures) => {
  if (temperatures.length == 1) {
    return [0];
  }
  const result = [];
  for (let i = 0; i < temperatures.length; i++) {
    if (i == temperatures.length - 1) {
      result.push(0);
      break;
    }
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result.push(j - i);
        break;
      }
      if (j == temperatures.length - 1) {
        result.push(0);
      }
    }
  }
  return result;
};

// Monotonic stack
const dailyTemperatures2 = (temperatures) => {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    const index = i;
    while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }
  return result;
};

console.log(dailyTemperatures2([73,74,75,71,69,72,76,73]));