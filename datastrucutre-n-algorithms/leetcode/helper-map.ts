export function getArrayWithLargestLength(map: Map<number, number[]>): number[] | [] {
  let largestArray: number[] = [];
  let largestLength: number = 0;
  for (const array of map.values()) {
    if (array.length > largestLength) {
      largestArray = array;
      largestLength = array.length;
    }
  }
  return largestArray;
}