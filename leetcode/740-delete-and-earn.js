/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = (nums) => {
  const map = new Map();
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });
  map.forEach((value, key) => {
    map.set(key, value * key);
  })
  const sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
  if (sortedKeys.length === 1) {
    return map.get(sortedKeys[0]);
  }
  if (sortedKeys.length === 2) {
    return calculateMaxPoint(1, sortedKeys, map);
  }
  const points = [];
  points[0] = map.get(sortedKeys[0]);
  points[1] = calculateMaxPoint(1, sortedKeys, map);
  for (let i = 2; i < sortedKeys.length; i++) {
    points[i] = calculateMaxPoint(i, sortedKeys, map, points);
  }
  return Math.max(points[sortedKeys.length - 1], points[sortedKeys.length - 2]);
};

const calculateMaxPoint = (index, sortedKeys, map, points) => {
  if (index === 1) {
    if (sortedKeys[index] === sortedKeys[index - 1] + 1) {
      return Math.max(map.get(sortedKeys[index]), map.get(sortedKeys[index - 1]));
    } else {
      return map.get(sortedKeys[index]) + map.get(sortedKeys[index - 1]);
    }
  }
  if (sortedKeys[index] === sortedKeys[index - 1] + 1) {
    return Math.max(
      map.get(sortedKeys[index]) + points[index - 2],
      points[index - 1]
    );
  } else {
    return map.get(sortedKeys[index]) + points[index - 1];
  }
}

console.log(deleteAndEarn([2,2,3,3,3,4,4]));