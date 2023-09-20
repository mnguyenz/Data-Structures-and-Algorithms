function kadanesAlgorithm(array) {
  let max = Number.NEGATIVE_INFINITY;
  let max_ending = 0;
  for (let i = 0; i < array.length; i++) {
    max_ending = max_ending + array[i]
    if (max_ending > max) {
      max = max_ending;
    }
    if (max_ending < 0) {
      max_ending = 0
    }
  }
  return max;
}
