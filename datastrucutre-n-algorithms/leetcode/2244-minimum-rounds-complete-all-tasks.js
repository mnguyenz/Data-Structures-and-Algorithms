/**
 * @param {number[]} tasks
 * @return {number}
 */
const minimumRounds = (tasks) => {
  const map = new Map();
  for (let i = 0; i < tasks.length; i++) {
    if (map.has(tasks[i])) {
      map.set(tasks[i], map.get(tasks[i]) + 1);
    } else {
      map.set(tasks[i], 1);
    }
  }
  // if (Array.from(map.values()).includes(1)) {
  //   return -1;
  // }
  let sum = 0;
  for (const key of map.keys()) {
    if (map.get(key) === 1) {
      return -1;
    } else {
      sum += ((map.get(key) + 2) - (map.get(key) + 2) % 3) / 3;
    }  
  }
  return sum;
}

console.log(minimumRounds([2,2,3,3,2,4,4,4,4,4]))