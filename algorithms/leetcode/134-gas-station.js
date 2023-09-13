/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// This solution has Time Limit Exceeded
const canCompleteCircuit1 = (gas, cost) => {
  for (let i = 0; i < gas.length; i++) {
    let accumulationGas = 0
    accumulationGas += gas[i];
    for (let j = i; j < i + gas.length; j++) {
      if (accumulationGas - cost[j % gas.length] < 0) {
        break;
      } else {
        accumulationGas = accumulationGas - cost[j % gas.length] + gas[(j + 1) % gas.length];
      }
      if (j === i + gas.length - 1) {
        return i;
      }
    }
  }  
  return -1;
};

// Solution 2
// Update position if current tank < 0
// Check if total tank is < 0
// When total tank is positive, it means we have enough gas to over all the previous path.
const canCompleteCircuit = (gas, cost) => {
  let curTank = 0, totalTank = 0, pos = 0;
  for (let i = 0; i < gas.length; i++) {
    curTank += gas[i] - cost[i];
    totalTank += gas[i] - cost[i];
    if (curTank < 0) {
      curTank = 0;
      pos = i + 1;
    }
  }   
  return totalTank < 0 ? -1 : pos;
}

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]));