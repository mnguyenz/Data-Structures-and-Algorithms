/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
const minimumTime = (time, totalTrips) => {
  let result = 0;
  let increasingTime = 0;
  while (result < totalTrips) {
    result = 0;
    increasingTime += 1;
    for (const t of time) {
      result += Math.floor(increasingTime / t);
    }
  }
  return increasingTime;
}

console.log(minimumTime([1,2,3], 5));
  