/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  let startTime = performance.now();
  function sumOfNums(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  }
  let endTime = performance.now();
  let runTime = endTime - startTime;

  return runTime;
}

console.log(calculateTime(200));
console.log(calculateTime(300));
