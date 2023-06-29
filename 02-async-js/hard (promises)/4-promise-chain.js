/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('One Second');
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Two Seconds');
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Three Seconds');
    }, 3000);
  });
}

async function calculateTime() {
  console.log('Starting Execution');
  let startTime = performance.now();
  await waitOneSecond().then(console.log);
  await waitTwoSecond().then(console.log);
  await waitThreeSecond().then((data) => {
    console.log(data);
    console.log(performance.now() - startTime);
  });
}
calculateTime();
// execution time 6006 milliseconds
