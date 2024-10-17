// Solution for 8-mini-max-sum.js
// Problem URL: https://www.hackerrank.com/challenges/mini-max-sum

/**
 * To solve this we can find the maximum and minimum values in the array and 
 * then subtract the minimum from the sum of the array and the maximum from the sum of the array to get the 
 * maximum and minimum sums respectively.
 */
function miniMaxSum(arr) {
    let minValue = arr[0];
    let maxValue = arr[0];
    let arrSum = arr[0]

    let arrLength = arr.length;

    for (let i = 1; i < arrLength; i++) {
        arrSum += arr[i];

        if (minValue > arr[i]) minValue = arr[i];
        else if (maxValue < arr[i]) maxValue = arr[i];
    }

    console.log((arrSum - maxValue) + " " + (arrSum - minValue));
}