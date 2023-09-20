function twoNumberSum(array, targetSum) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}