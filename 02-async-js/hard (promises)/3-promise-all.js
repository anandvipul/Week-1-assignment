/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
  console.log('Started the sequential Code');
  await waitOneSecond().then(console.log);
  await waitTwoSecond().then(console.log);
  await waitThreeSecond().then(console.log);
  console.log('Finished the code execution');
}

calculateTime();
