// Generate 10 random numbers from 1 - 120
// Prepare to driver license test

function randomNumbers(numberOfRandomNumbers: number, min: number, max: number): number[] {
  const numbers: number[] = [];
  while (numbers.length < numberOfRandomNumbers) {
    const rn = getRandomNumber(min, max);
    if (!numbers.includes(rn)) {
      numbers.push(rn);
    }
  }
  return numbers.sort((a, b) => a - b);
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumbers(10, 1, 120));