/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  if (arr.length < 2) {
    return false;
  }
  const map = new Map();
  arr.forEach(number => {
    if (!map.has(number)) {
      map.set(number, 1);
    }
    else {
      map.set(number, map.get(number) + 1);
    }

  });
  const isDuplicate = Array.from(map.values()).some(function(item, idx){ 
    return Array.from(map.values()).indexOf(item) != idx 
  });
  return !isDuplicate;
};

// Testing
console.log(uniqueOccurrences([1,2,2,1,1,3]));