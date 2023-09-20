/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = (points) => {
  let result = 0;
  const sortedPoints = points.sort(function(a, b) {
    return a[1] - b[1];
  });
  while(sortedPoints.length > 0) {
    result += 1;
    const maxX = sortedPoints.shift()[1];
    while(sortedPoints.length > 0) {
      if (maxX >= sortedPoints[0][0] && maxX <= sortedPoints[0][1]) {
        sortedPoints.shift();
      } else {
        break;
      }
    }
  }
  return result;
};

console.log(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))